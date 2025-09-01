import { MonacGlobalScope } from "./types";

/**
 * TODO(Kai):
 * - Improve by using registerDocumentSemanticTokensProvider
 */
export function setupSyntaxColoring(monaco: MonacGlobalScope) {
  monaco.languages.setMonarchTokensProvider("softr-formula", {
    functions: [
      "ABS",
      "ACOS",
      "ASIN",
      "ATAN",
      "ATAN2",
      "CEILING",
      "COS",
      "COSH",
      "DATEADD",
      "DATESTR",
      "DATETIME_DIFF",
      "DATETIME_FORMAT",
      "DATETIME_PARSE",
      "IS_BEFORE",
      "IS_AFTER",
      "IS_SAME",
      "DAY",
      "DEGREES",
      "DOMAIN",
      "EXP",
      "FIND",
      "FLOOR",
      "HOUR",
      "IF",
      "ISERROR",
      "IFERROR",
      "LEN",
      "LN",
      "LOG",
      "LOWER",
      "MID",
      "MINUTE",
      "MOD",
      "MONTH",
      "NOW",
      "TONOW",
      "POWER",
      "PROPER",
      "REGEX_EXTRACT",
      "REGEX_MATCH",
      "REGEX_REPLACE",
      "REPT",
      "ROUND",
      "RAND",
      "RANDBETWEEN",
      "SECOND",
      "SET_LOCALE",
      "SET_TIMEZONE",
      "SIN",
      "SINH",
      "SQRT",
      "SUBSTITUTE",
      "SWITCH",
      "TAN",
      "TANH",
      "TODAY",
      "TRIM",
      "UPPER",
      "VALUE",
      "WEEKDAY",
      "WEEKNUM",
      "WORKDAY",
      "WORKDAY_DIFF",
      "YEAR",
      "AND",
      "OR",
      "NOT",
      "MIN",
      "MAX",
      "SUM",
      "AVERAGE",
      "COUNT",
      "ARRAYCOMPACT",
      "ARRAYFLATTEN",
      "ARRAYJOIN",
      "ARRAYUNIQUE",
      "ARRAYSLICE",
      "CONCATENATE",
      "STRINGIFY",
      "LEFT",
      "RIGHT",
      "SEARCH",
      "REPLACE",
      "T",
      "SPLIT",
      "CREATED_TIME",
      "CREATED_AT",
      "LAST_MODIFIED_TIME",
      "LAST_MODIFIED_AT",
      "UPDATED_TIME",
      "UPDATED_AT",
      "UPDATED_BY",
      "LAST_MODIFIED_BY",
      "CREATED_BY",
      "RECORD_ID",
    ],

    // Logical operators and constants
    keywords: ["AND", "OR", "NOT", "TRUE", "FALSE", "BLANK", "ERROR"],

    // All other operators
    operators: [
      "=",
      "!=",
      "<>",
      "<=",
      ">=",
      "<",
      ">",
      "+",
      "-",
      "*",
      "/",
      "^",
      "&",
    ],

    // Symbols that can be part of operators
    symbols: /[=><!+\-*/^&]+/,

    // The main tokenizer for our language
    tokenizer: {
      root: [
        // Rule 1: Braced field references (highest priority)
        // e.g., {My Field Name}
        [/{[^}]*}/, "identifier.braced"],

        // Rule 2: Identifiers, functions, and keywords
        [
          /[a-zA-Z_]\w*/,
          {
            cases: {
              "@functions": "keyword.function",
              "@keywords": "keyword.logic",
              "@default": "identifier",
            },
          },
        ],

        // Rule 3: Numbers (integers, decimals, negatives)
        [/-?\d*\.\d+/, "number.float"],
        [/-?\d+/, "number"],

        // Rule 4: Delimiters (parentheses, commas)
        [/[()]/, "@brackets"],
        [/,/, "delimiter.comma"],

        // Rule 5: Strings (single and double quoted)
        [/"([^"\\]|\\.)*$/, "string.invalid"], // non-teminated string
        [/'([^'\\]|\\.)*$/, "string.invalid"], // non-teminated string
        [
          /"/,
          { token: "string.quote", bracket: "@open", next: "@string_double" },
        ],
        [
          /'/,
          { token: "string.quote", bracket: "@open", next: "@string_single" },
        ],

        // Rule 6: Operators
        [
          /@symbols/,
          {
            cases: {
              "@operators": "operator",
              "@default": "",
            },
          },
        ],

        // Rule 7: Whitespace (ignored)
        { include: "@whitespace" },
      ],

      // State for handling double-quoted strings
      string_double: [
        [/[^\\"]+/, "string"],
        [/"/, { token: "string.quote", bracket: "@close", next: "@pop" }],
      ],

      // State for handling single-quoted strings
      string_single: [
        [/[^\\']+/, "string"],
        [/'/, { token: "string.quote", bracket: "@close", next: "@pop" }],
      ],

      whitespace: [[/[ \t\r\n]+/, "white"]],
    },
  });

  monaco.editor.defineTheme("formulaTheme", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "keyword.function", foreground: "d857cf" }, // Magenta for functions
      { token: "keyword.logic", foreground: "c586c0" }, // Purple for AND/OR/NOT
      { token: "identifier.braced", foreground: "9cdcfe" }, // Light blue for {Fields}
      { token: "identifier", foreground: "4fc1ff" }, // Another blue for other identifiers
      { token: "number", foreground: "b5cea8" }, // Green for numbers
      { token: "string", foreground: "ce9178" }, // Orange for strings
      { token: "operator", foreground: "d4d4d4" }, // Grey for operators
      { token: "delimiter.comma", foreground: "d4d4d4" },
      { token: "string.invalid", foreground: "ff0000", fontStyle: "bold" }, // Red for invalid strings
    ],
    colors: {},
  });
}
