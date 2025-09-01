grammar Formula;

/* -------------------------
   1) PARSER RULES
   ------------------------- */

/** ENTRY RULE **/
formula
    : expression EOF
    ;

/**
 * EXPRESSIONS:
 * - We allow binary operators (+, -, *, /, ^) for numeric expressions,
 *   & for string concatenation (like in Airtable).
 * - We allow comparison operators =, !=, <, <=, >, >= for boolean results.
 * - We allow logical operators AND, OR, plus NOT as prefix.
 * - We allow function calls, field references, strings, parentheses, numeric literals.
 */
expression
    // 1) Logical NOT
    : 'NOT' expression
      # notOpExpr

    // 2) Multiplicative
    | expression (MULT | DIV) expression
      # multiplyDivideExpr

    // 3) Exponentiation
    | expression '^' expression
      # exponentExpr

    // 4) Add/Sub
    | expression (PLUS | MINUS) expression
      # addSubtractExpr

    // 5) Comparison operators
    | expression (('=' | '!=' | '<>' | '<=' | '>=' | '<' | '>') expression)+
      # comparisonExpr

    // 6) String concatenation
    | expression '&' expression
      # stringConcatExpr

    // 7) Logical AND/OR
    | expression ('AND'|'OR') expression
      # logicalAndOrExpr

    // 8) Parenthesized expressions
    | LPAREN expression RPAREN
      # parenExpr

    // 9) Function call
    | functionCall
      # functionCallExpr

    // 10) Field reference
    | fieldReference
      # fieldRefExpr

    // 11) Literal string
    | STRING
      # stringLiteralExpr

    // 12) Numeric literal
    | NUMBER
      # numericLiteralExpr
    ;

/**
 * FUNCTION CALL:
 *  e.g. DATEADD(expr, expr, expr), IF(expr, expr, expr), CONCAT(expr, expr, ...)
 */
functionCall
    : functionName LPAREN argList? RPAREN
    ;

/** Zero or more expressions separated by commas */
argList
    : expression (COMMA expression)*
    ;

/**
 * List of known function names in Airtable (not exhaustive).
 * Adjust as needed.
 */
functionName
    : 'ABS'
    | 'ACOS'
    | 'ASIN'
    | 'ATAN'
    | 'ATAN2'
    | 'CEILING'
    | 'COS'
    | 'COSH'
    | 'DATEADD'
    | 'DATESTR'
    | 'DATETIME_DIFF'
    | 'DATETIME_FORMAT'
    | 'DATETIME_PARSE'
    | 'IS_BEFORE'
    | 'IS_AFTER'
    | 'IS_SAME'
    | 'DAY'
    | 'DEGREES'
    | 'DOMAIN'
    | 'EXP'
    | 'FIND'
    | 'FLOOR'
    | 'HOUR'
    | 'IF'
    | 'ISERROR'
    | 'IFERROR'
    | 'TRUE'
    | 'FALSE'
    | 'ERROR'
    | 'BLANK'
    | 'LEN'
    | 'LN'
    | 'LOG'
    | 'LOWER'
    | 'MID'
    | 'MINUTE'
    | 'MOD'
    | 'MONTH'
    | 'NOT'     // used as function in some contexts
    | 'NOW'
    | 'TONOW'
    | 'POWER'
    | 'PROPER'
    | 'REGEX_EXTRACT'
    | 'REGEX_MATCH'
    | 'REGEX_REPLACE'
    | 'REPT'
    | 'ROUND'
    | 'RAND'
    | 'RANDBETWEEN'
    | 'SECOND'
    | 'SET_LOCALE'
    | 'SET_TIMEZONE'
    | 'SIN'
    | 'SINH'
    | 'SQRT'
    | 'SUBSTITUTE'
    | 'SWITCH'
    | 'TAN'
    | 'TANH'
    | 'TODAY'
    | 'TRIM'
    | 'UPPER'
    | 'VALUE'
    | 'WEEKDAY'
    | 'WEEKNUM'
    | 'WORKDAY'
    | 'WORKDAY_DIFF'
    | 'YEAR'

    // Some “special” ones:
    | 'AND'
    | 'OR'

    // Aggregations:
    | 'MIN'
    | 'MAX'
    | 'SUM'
    | 'AVERAGE'
    | 'COUNT'

    // Array functions:
    | 'ARRAYCOMPACT'
    | 'ARRAYFLATTEN'
    | 'ARRAYJOIN'
    | 'ARRAYUNIQUE'
    | 'ARRAYSLICE'

    // String:
    | 'CONCATENATE'
    | 'STRINGIFY'
    | 'LEFT'
    | 'RIGHT'
    | 'SEARCH'
    | 'REPLACE'
    | 'T'
    | 'SPLIT'


    // Possibly others:
    | 'CREATED_TIME'
    | 'CREATED_AT'
    | 'LAST_MODIFIED_TIME'
    | 'LAST_MODIFIED_AT'
    | 'UPDATED_TIME'
    | 'UPDATED_AT'
    | 'UPDATED_BY'
    | 'LAST_MODIFIED_BY'
    | 'CREATED_BY'
    | 'RECORD_ID'
    ;

/**
 * FIELD REFERENCE
 * In Airtable, fields are typically referenced in curly braces: {Name of Field}
 * They can contain spaces, punctuation, etc.
 * For simplicity, let's approximate with:
 *  1) {FIELD_NAME}
 *  2) or direct IDENTIFIER
 */
fieldReference
    : BRACED_FIELD_REF // e.g. {My Field Name}
    | IDENTIFIER // e.g. MyField
    ;

/* -------------------------
   2) LEXER RULES
   ------------------------- */

/** Ignore whitespace */
WS : [\t\r\n ]+ -> skip ;

/** Operators */
PLUS  : '+';
MINUS : '-';
MULT  : '*';
DIV   : '/';

/** Parentheses and commas */
LPAREN : '(';
RPAREN : ')';
COMMA  : ',';

/** Numeric literals */
NUMBER
    : '-'? [0-9]+ ('.' [0-9]+)?   // Integers and decimals (e.g. 123, 45.67)
    | '-'? '.' [0-9]+             // Leading decimal (e.g. .98)
    ;

/** String literals (double-quoted) */
STRING
    : '"' (~["\r\n])* '"'
    | '\'' (~['\r\n])* '\''
    ;

/**
 * IDENTIFIER token: e.g. MyField, user123. If you only want {Field Name} references,
 * remove this and require everything in braces.
 */
IDENTIFIER
    : [a-zA-Z_][a-zA-Z0-9_]*
    ;

/** Field names (matches anything inside `{}`) */
BRACED_FIELD_REF
    : '{' ~[{}]* '}'
    ;