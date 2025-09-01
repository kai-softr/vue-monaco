// Generated from /Users/kaischonberger/vs-code-workspace/monaco-antlr-test/Formula.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class FormulaParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		T__38=39, T__39=40, T__40=41, T__41=42, T__42=43, T__43=44, T__44=45, 
		T__45=46, T__46=47, T__47=48, T__48=49, T__49=50, T__50=51, T__51=52, 
		T__52=53, T__53=54, T__54=55, T__55=56, T__56=57, T__57=58, T__58=59, 
		T__59=60, T__60=61, T__61=62, T__62=63, T__63=64, T__64=65, T__65=66, 
		T__66=67, T__67=68, T__68=69, T__69=70, T__70=71, T__71=72, T__72=73, 
		T__73=74, T__74=75, T__75=76, T__76=77, T__77=78, T__78=79, T__79=80, 
		T__80=81, T__81=82, T__82=83, T__83=84, T__84=85, T__85=86, T__86=87, 
		T__87=88, T__88=89, T__89=90, T__90=91, T__91=92, T__92=93, T__93=94, 
		T__94=95, T__95=96, T__96=97, T__97=98, T__98=99, T__99=100, T__100=101, 
		T__101=102, T__102=103, T__103=104, T__104=105, T__105=106, T__106=107, 
		T__107=108, WS=109, PLUS=110, MINUS=111, MULT=112, DIV=113, LPAREN=114, 
		RPAREN=115, COMMA=116, NUMBER=117, STRING=118, IDENTIFIER=119, BRACED_FIELD_REF=120;
	public static final int
		RULE_formula = 0, RULE_expression = 1, RULE_functionCall = 2, RULE_argList = 3, 
		RULE_functionName = 4, RULE_fieldReference = 5;
	private static String[] makeRuleNames() {
		return new String[] {
			"formula", "expression", "functionCall", "argList", "functionName", "fieldReference"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'NOT'", "'^'", "'='", "'!='", "'<>'", "'<='", "'>='", "'<'", "'>'", 
			"'&'", "'AND'", "'OR'", "'ABS'", "'ACOS'", "'ASIN'", "'ATAN'", "'ATAN2'", 
			"'CEILING'", "'COS'", "'COSH'", "'DATEADD'", "'DATESTR'", "'DATETIME_DIFF'", 
			"'DATETIME_FORMAT'", "'DATETIME_PARSE'", "'IS_BEFORE'", "'IS_AFTER'", 
			"'IS_SAME'", "'DAY'", "'DEGREES'", "'DOMAIN'", "'EXP'", "'FIND'", "'FLOOR'", 
			"'HOUR'", "'IF'", "'ISERROR'", "'IFERROR'", "'TRUE'", "'FALSE'", "'ERROR'", 
			"'BLANK'", "'LEN'", "'LN'", "'LOG'", "'LOWER'", "'MID'", "'MINUTE'", 
			"'MOD'", "'MONTH'", "'NOW'", "'TONOW'", "'POWER'", "'PROPER'", "'REGEX_EXTRACT'", 
			"'REGEX_MATCH'", "'REGEX_REPLACE'", "'REPT'", "'ROUND'", "'RAND'", "'RANDBETWEEN'", 
			"'SECOND'", "'SET_LOCALE'", "'SET_TIMEZONE'", "'SIN'", "'SINH'", "'SQRT'", 
			"'SUBSTITUTE'", "'SWITCH'", "'TAN'", "'TANH'", "'TODAY'", "'TRIM'", "'UPPER'", 
			"'VALUE'", "'WEEKDAY'", "'WEEKNUM'", "'WORKDAY'", "'WORKDAY_DIFF'", "'YEAR'", 
			"'MIN'", "'MAX'", "'SUM'", "'AVERAGE'", "'COUNT'", "'ARRAYCOMPACT'", 
			"'ARRAYFLATTEN'", "'ARRAYJOIN'", "'ARRAYUNIQUE'", "'ARRAYSLICE'", "'CONCATENATE'", 
			"'STRINGIFY'", "'LEFT'", "'RIGHT'", "'SEARCH'", "'REPLACE'", "'T'", "'SPLIT'", 
			"'CREATED_TIME'", "'CREATED_AT'", "'LAST_MODIFIED_TIME'", "'LAST_MODIFIED_AT'", 
			"'UPDATED_TIME'", "'UPDATED_AT'", "'UPDATED_BY'", "'LAST_MODIFIED_BY'", 
			"'CREATED_BY'", "'RECORD_ID'", null, "'+'", "'-'", "'*'", "'/'", "'('", 
			"')'", "','"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, "WS", "PLUS", "MINUS", "MULT", "DIV", "LPAREN", "RPAREN", "COMMA", 
			"NUMBER", "STRING", "IDENTIFIER", "BRACED_FIELD_REF"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Formula.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public FormulaParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FormulaContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode EOF() { return getToken(FormulaParser.EOF, 0); }
		public FormulaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formula; }
	}

	public final FormulaContext formula() throws RecognitionException {
		FormulaContext _localctx = new FormulaContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_formula);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(12);
			expression(0);
			setState(13);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionContext extends ParserRuleContext {
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	 
		public ExpressionContext() { }
		public void copyFrom(ExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AddSubtractExprContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode PLUS() { return getToken(FormulaParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(FormulaParser.MINUS, 0); }
		public AddSubtractExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExponentExprContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ExponentExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FieldRefExprContext extends ExpressionContext {
		public FieldReferenceContext fieldReference() {
			return getRuleContext(FieldReferenceContext.class,0);
		}
		public FieldRefExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StringLiteralExprContext extends ExpressionContext {
		public TerminalNode STRING() { return getToken(FormulaParser.STRING, 0); }
		public StringLiteralExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class LogicalAndOrExprContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public LogicalAndOrExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FunctionCallExprContext extends ExpressionContext {
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public FunctionCallExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NumericLiteralExprContext extends ExpressionContext {
		public TerminalNode NUMBER() { return getToken(FormulaParser.NUMBER, 0); }
		public NumericLiteralExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MultiplyDivideExprContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode MULT() { return getToken(FormulaParser.MULT, 0); }
		public TerminalNode DIV() { return getToken(FormulaParser.DIV, 0); }
		public MultiplyDivideExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ComparisonExprContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ComparisonExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StringConcatExprContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public StringConcatExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NotOpExprContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public NotOpExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParenExprContext extends ExpressionContext {
		public TerminalNode LPAREN() { return getToken(FormulaParser.LPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(FormulaParser.RPAREN, 0); }
		public ParenExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 2;
		enterRecursionRule(_localctx, 2, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(26);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				{
				_localctx = new NotOpExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(16);
				match(T__0);
				setState(17);
				expression(12);
				}
				break;
			case 2:
				{
				_localctx = new ParenExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(18);
				match(LPAREN);
				setState(19);
				expression(0);
				setState(20);
				match(RPAREN);
				}
				break;
			case 3:
				{
				_localctx = new FunctionCallExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(22);
				functionCall();
				}
				break;
			case 4:
				{
				_localctx = new FieldRefExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(23);
				fieldReference();
				}
				break;
			case 5:
				{
				_localctx = new StringLiteralExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(24);
				match(STRING);
				}
				break;
			case 6:
				{
				_localctx = new NumericLiteralExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(25);
				match(NUMBER);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(52);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(50);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
					case 1:
						{
						_localctx = new MultiplyDivideExprContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(28);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(29);
						_la = _input.LA(1);
						if ( !(_la==MULT || _la==DIV) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(30);
						expression(12);
						}
						break;
					case 2:
						{
						_localctx = new ExponentExprContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(31);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(32);
						match(T__1);
						setState(33);
						expression(11);
						}
						break;
					case 3:
						{
						_localctx = new AddSubtractExprContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(34);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(35);
						_la = _input.LA(1);
						if ( !(_la==PLUS || _la==MINUS) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(36);
						expression(10);
						}
						break;
					case 4:
						{
						_localctx = new StringConcatExprContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(37);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(38);
						match(T__9);
						setState(39);
						expression(8);
						}
						break;
					case 5:
						{
						_localctx = new LogicalAndOrExprContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(40);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(41);
						_la = _input.LA(1);
						if ( !(_la==T__10 || _la==T__11) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(42);
						expression(7);
						}
						break;
					case 6:
						{
						_localctx = new ComparisonExprContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(43);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(46); 
						_errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								setState(44);
								_la = _input.LA(1);
								if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1016L) != 0)) ) {
								_errHandler.recoverInline(this);
								}
								else {
									if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
									_errHandler.reportMatch(this);
									consume();
								}
								setState(45);
								expression(0);
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							setState(48); 
							_errHandler.sync(this);
							_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
						} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
						}
						break;
					}
					} 
				}
				setState(54);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionCallContext extends ParserRuleContext {
		public FunctionNameContext functionName() {
			return getRuleContext(FunctionNameContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(FormulaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(FormulaParser.RPAREN, 0); }
		public ArgListContext argList() {
			return getRuleContext(ArgListContext.class,0);
		}
		public FunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCall; }
	}

	public final FunctionCallContext functionCall() throws RecognitionException {
		FunctionCallContext _localctx = new FunctionCallContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_functionCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(55);
			functionName();
			setState(56);
			match(LPAREN);
			setState(58);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & -2046L) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & 136269073100046335L) != 0)) {
				{
				setState(57);
				argList();
				}
			}

			setState(60);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgListContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FormulaParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FormulaParser.COMMA, i);
		}
		public ArgListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argList; }
	}

	public final ArgListContext argList() throws RecognitionException {
		ArgListContext _localctx = new ArgListContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_argList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(62);
			expression(0);
			setState(67);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(63);
				match(COMMA);
				setState(64);
				expression(0);
				}
				}
				setState(69);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionNameContext extends ParserRuleContext {
		public FunctionNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionName; }
	}

	public final FunctionNameContext functionName() throws RecognitionException {
		FunctionNameContext _localctx = new FunctionNameContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_functionName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(70);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & -2046L) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & 35184372088831L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FieldReferenceContext extends ParserRuleContext {
		public TerminalNode BRACED_FIELD_REF() { return getToken(FormulaParser.BRACED_FIELD_REF, 0); }
		public TerminalNode IDENTIFIER() { return getToken(FormulaParser.IDENTIFIER, 0); }
		public FieldReferenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldReference; }
	}

	public final FieldReferenceContext fieldReference() throws RecognitionException {
		FieldReferenceContext _localctx = new FieldReferenceContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_fieldReference);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(72);
			_la = _input.LA(1);
			if ( !(_la==IDENTIFIER || _la==BRACED_FIELD_REF) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 1:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 11);
		case 1:
			return precpred(_ctx, 10);
		case 2:
			return precpred(_ctx, 9);
		case 3:
			return precpred(_ctx, 7);
		case 4:
			return precpred(_ctx, 6);
		case 5:
			return precpred(_ctx, 8);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001xK\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002\u0002"+
		"\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002\u0005"+
		"\u0007\u0005\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001\u001b\b\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0004\u0001"+
		"/\b\u0001\u000b\u0001\f\u00010\u0005\u00013\b\u0001\n\u0001\f\u00016\t"+
		"\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002;\b\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0005\u0003B\b"+
		"\u0003\n\u0003\f\u0003E\t\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0000\u0001\u0002\u0006\u0000\u0002\u0004\u0006\b\n"+
		"\u0000\u0006\u0001\u0000pq\u0001\u0000no\u0001\u0000\u000b\f\u0001\u0000"+
		"\u0003\t\u0002\u0000\u0001\u0001\u000bl\u0001\u0000wxR\u0000\f\u0001\u0000"+
		"\u0000\u0000\u0002\u001a\u0001\u0000\u0000\u0000\u00047\u0001\u0000\u0000"+
		"\u0000\u0006>\u0001\u0000\u0000\u0000\bF\u0001\u0000\u0000\u0000\nH\u0001"+
		"\u0000\u0000\u0000\f\r\u0003\u0002\u0001\u0000\r\u000e\u0005\u0000\u0000"+
		"\u0001\u000e\u0001\u0001\u0000\u0000\u0000\u000f\u0010\u0006\u0001\uffff"+
		"\uffff\u0000\u0010\u0011\u0005\u0001\u0000\u0000\u0011\u001b\u0003\u0002"+
		"\u0001\f\u0012\u0013\u0005r\u0000\u0000\u0013\u0014\u0003\u0002\u0001"+
		"\u0000\u0014\u0015\u0005s\u0000\u0000\u0015\u001b\u0001\u0000\u0000\u0000"+
		"\u0016\u001b\u0003\u0004\u0002\u0000\u0017\u001b\u0003\n\u0005\u0000\u0018"+
		"\u001b\u0005v\u0000\u0000\u0019\u001b\u0005u\u0000\u0000\u001a\u000f\u0001"+
		"\u0000\u0000\u0000\u001a\u0012\u0001\u0000\u0000\u0000\u001a\u0016\u0001"+
		"\u0000\u0000\u0000\u001a\u0017\u0001\u0000\u0000\u0000\u001a\u0018\u0001"+
		"\u0000\u0000\u0000\u001a\u0019\u0001\u0000\u0000\u0000\u001b4\u0001\u0000"+
		"\u0000\u0000\u001c\u001d\n\u000b\u0000\u0000\u001d\u001e\u0007\u0000\u0000"+
		"\u0000\u001e3\u0003\u0002\u0001\f\u001f \n\n\u0000\u0000 !\u0005\u0002"+
		"\u0000\u0000!3\u0003\u0002\u0001\u000b\"#\n\t\u0000\u0000#$\u0007\u0001"+
		"\u0000\u0000$3\u0003\u0002\u0001\n%&\n\u0007\u0000\u0000&\'\u0005\n\u0000"+
		"\u0000\'3\u0003\u0002\u0001\b()\n\u0006\u0000\u0000)*\u0007\u0002\u0000"+
		"\u0000*3\u0003\u0002\u0001\u0007+.\n\b\u0000\u0000,-\u0007\u0003\u0000"+
		"\u0000-/\u0003\u0002\u0001\u0000.,\u0001\u0000\u0000\u0000/0\u0001\u0000"+
		"\u0000\u00000.\u0001\u0000\u0000\u000001\u0001\u0000\u0000\u000013\u0001"+
		"\u0000\u0000\u00002\u001c\u0001\u0000\u0000\u00002\u001f\u0001\u0000\u0000"+
		"\u00002\"\u0001\u0000\u0000\u00002%\u0001\u0000\u0000\u00002(\u0001\u0000"+
		"\u0000\u00002+\u0001\u0000\u0000\u000036\u0001\u0000\u0000\u000042\u0001"+
		"\u0000\u0000\u000045\u0001\u0000\u0000\u00005\u0003\u0001\u0000\u0000"+
		"\u000064\u0001\u0000\u0000\u000078\u0003\b\u0004\u00008:\u0005r\u0000"+
		"\u00009;\u0003\u0006\u0003\u0000:9\u0001\u0000\u0000\u0000:;\u0001\u0000"+
		"\u0000\u0000;<\u0001\u0000\u0000\u0000<=\u0005s\u0000\u0000=\u0005\u0001"+
		"\u0000\u0000\u0000>C\u0003\u0002\u0001\u0000?@\u0005t\u0000\u0000@B\u0003"+
		"\u0002\u0001\u0000A?\u0001\u0000\u0000\u0000BE\u0001\u0000\u0000\u0000"+
		"CA\u0001\u0000\u0000\u0000CD\u0001\u0000\u0000\u0000D\u0007\u0001\u0000"+
		"\u0000\u0000EC\u0001\u0000\u0000\u0000FG\u0007\u0004\u0000\u0000G\t\u0001"+
		"\u0000\u0000\u0000HI\u0007\u0005\u0000\u0000I\u000b\u0001\u0000\u0000"+
		"\u0000\u0006\u001a024:C";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}