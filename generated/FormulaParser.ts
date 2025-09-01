// Generated from generated/Formula.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import FormulaListener from "./FormulaListener.js";
import FormulaVisitor from "./FormulaVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class FormulaParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly T__79 = 80;
	public static readonly T__80 = 81;
	public static readonly T__81 = 82;
	public static readonly T__82 = 83;
	public static readonly T__83 = 84;
	public static readonly T__84 = 85;
	public static readonly T__85 = 86;
	public static readonly T__86 = 87;
	public static readonly T__87 = 88;
	public static readonly T__88 = 89;
	public static readonly T__89 = 90;
	public static readonly T__90 = 91;
	public static readonly T__91 = 92;
	public static readonly T__92 = 93;
	public static readonly T__93 = 94;
	public static readonly T__94 = 95;
	public static readonly T__95 = 96;
	public static readonly T__96 = 97;
	public static readonly T__97 = 98;
	public static readonly T__98 = 99;
	public static readonly T__99 = 100;
	public static readonly T__100 = 101;
	public static readonly T__101 = 102;
	public static readonly T__102 = 103;
	public static readonly T__103 = 104;
	public static readonly T__104 = 105;
	public static readonly T__105 = 106;
	public static readonly T__106 = 107;
	public static readonly T__107 = 108;
	public static readonly WS = 109;
	public static readonly PLUS = 110;
	public static readonly MINUS = 111;
	public static readonly MULT = 112;
	public static readonly DIV = 113;
	public static readonly LPAREN = 114;
	public static readonly RPAREN = 115;
	public static readonly COMMA = 116;
	public static readonly NUMBER = 117;
	public static readonly STRING = 118;
	public static readonly IDENTIFIER = 119;
	public static readonly BRACED_FIELD_REF = 120;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_formula = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_functionCall = 2;
	public static readonly RULE_argList = 3;
	public static readonly RULE_functionName = 4;
	public static readonly RULE_fieldReference = 5;
	public static readonly literalNames: (string | null)[] = [ null, "'NOT'", 
                                                            "'^'", "'='", 
                                                            "'!='", "'<>'", 
                                                            "'<='", "'>='", 
                                                            "'<'", "'>'", 
                                                            "'&'", "'AND'", 
                                                            "'OR'", "'ABS'", 
                                                            "'ACOS'", "'ASIN'", 
                                                            "'ATAN'", "'ATAN2'", 
                                                            "'CEILING'", 
                                                            "'COS'", "'COSH'", 
                                                            "'DATEADD'", 
                                                            "'DATESTR'", 
                                                            "'DATETIME_DIFF'", 
                                                            "'DATETIME_FORMAT'", 
                                                            "'DATETIME_PARSE'", 
                                                            "'IS_BEFORE'", 
                                                            "'IS_AFTER'", 
                                                            "'IS_SAME'", 
                                                            "'DAY'", "'DEGREES'", 
                                                            "'DOMAIN'", 
                                                            "'EXP'", "'FIND'", 
                                                            "'FLOOR'", "'HOUR'", 
                                                            "'IF'", "'ISERROR'", 
                                                            "'IFERROR'", 
                                                            "'TRUE'", "'FALSE'", 
                                                            "'ERROR'", "'BLANK'", 
                                                            "'LEN'", "'LN'", 
                                                            "'LOG'", "'LOWER'", 
                                                            "'MID'", "'MINUTE'", 
                                                            "'MOD'", "'MONTH'", 
                                                            "'NOW'", "'TONOW'", 
                                                            "'POWER'", "'PROPER'", 
                                                            "'REGEX_EXTRACT'", 
                                                            "'REGEX_MATCH'", 
                                                            "'REGEX_REPLACE'", 
                                                            "'REPT'", "'ROUND'", 
                                                            "'RAND'", "'RANDBETWEEN'", 
                                                            "'SECOND'", 
                                                            "'SET_LOCALE'", 
                                                            "'SET_TIMEZONE'", 
                                                            "'SIN'", "'SINH'", 
                                                            "'SQRT'", "'SUBSTITUTE'", 
                                                            "'SWITCH'", 
                                                            "'TAN'", "'TANH'", 
                                                            "'TODAY'", "'TRIM'", 
                                                            "'UPPER'", "'VALUE'", 
                                                            "'WEEKDAY'", 
                                                            "'WEEKNUM'", 
                                                            "'WORKDAY'", 
                                                            "'WORKDAY_DIFF'", 
                                                            "'YEAR'", "'MIN'", 
                                                            "'MAX'", "'SUM'", 
                                                            "'AVERAGE'", 
                                                            "'COUNT'", "'ARRAYCOMPACT'", 
                                                            "'ARRAYFLATTEN'", 
                                                            "'ARRAYJOIN'", 
                                                            "'ARRAYUNIQUE'", 
                                                            "'ARRAYSLICE'", 
                                                            "'CONCATENATE'", 
                                                            "'STRINGIFY'", 
                                                            "'LEFT'", "'RIGHT'", 
                                                            "'SEARCH'", 
                                                            "'REPLACE'", 
                                                            "'T'", "'SPLIT'", 
                                                            "'CREATED_TIME'", 
                                                            "'CREATED_AT'", 
                                                            "'LAST_MODIFIED_TIME'", 
                                                            "'LAST_MODIFIED_AT'", 
                                                            "'UPDATED_TIME'", 
                                                            "'UPDATED_AT'", 
                                                            "'UPDATED_BY'", 
                                                            "'LAST_MODIFIED_BY'", 
                                                            "'CREATED_BY'", 
                                                            "'RECORD_ID'", 
                                                            null, "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'('", 
                                                            "')'", "','" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "WS", 
                                                             "PLUS", "MINUS", 
                                                             "MULT", "DIV", 
                                                             "LPAREN", "RPAREN", 
                                                             "COMMA", "NUMBER", 
                                                             "STRING", "IDENTIFIER", 
                                                             "BRACED_FIELD_REF" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"formula", "expression", "functionCall", "argList", "functionName", "fieldReference",
	];
	public get grammarFileName(): string { return "Formula.g4"; }
	public get literalNames(): (string | null)[] { return FormulaParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return FormulaParser.symbolicNames; }
	public get ruleNames(): string[] { return FormulaParser.ruleNames; }
	public get serializedATN(): number[] { return FormulaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, FormulaParser._ATN, FormulaParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public formula(): FormulaContext {
		let localctx: FormulaContext = new FormulaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, FormulaParser.RULE_formula);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 12;
			this.expression(0);
			this.state = 13;
			this.match(FormulaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 2;
		this.enterRecursionRule(localctx, 2, FormulaParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 26;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				localctx = new NotOpExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 16;
				this.match(FormulaParser.T__0);
				this.state = 17;
				this.expression(12);
				}
				break;
			case 2:
				{
				localctx = new ParenExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 18;
				this.match(FormulaParser.LPAREN);
				this.state = 19;
				this.expression(0);
				this.state = 20;
				this.match(FormulaParser.RPAREN);
				}
				break;
			case 3:
				{
				localctx = new FunctionCallExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 22;
				this.functionCall();
				}
				break;
			case 4:
				{
				localctx = new FieldRefExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 23;
				this.fieldReference();
				}
				break;
			case 5:
				{
				localctx = new StringLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 24;
				this.match(FormulaParser.STRING);
				}
				break;
			case 6:
				{
				localctx = new NumericLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 25;
				this.match(FormulaParser.NUMBER);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 52;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 50;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplyDivideExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_expression);
						this.state = 28;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 29;
						_la = this._input.LA(1);
						if(!(_la===112 || _la===113)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 30;
						this.expression(12);
						}
						break;
					case 2:
						{
						localctx = new ExponentExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_expression);
						this.state = 31;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 32;
						this.match(FormulaParser.T__1);
						this.state = 33;
						this.expression(11);
						}
						break;
					case 3:
						{
						localctx = new AddSubtractExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_expression);
						this.state = 34;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 35;
						_la = this._input.LA(1);
						if(!(_la===110 || _la===111)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 36;
						this.expression(10);
						}
						break;
					case 4:
						{
						localctx = new StringConcatExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_expression);
						this.state = 37;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 38;
						this.match(FormulaParser.T__9);
						this.state = 39;
						this.expression(8);
						}
						break;
					case 5:
						{
						localctx = new LogicalAndOrExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_expression);
						this.state = 40;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 41;
						_la = this._input.LA(1);
						if(!(_la===11 || _la===12)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 42;
						this.expression(7);
						}
						break;
					case 6:
						{
						localctx = new ComparisonExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_expression);
						this.state = 43;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 46;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 44;
								_la = this._input.LA(1);
								if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1016) !== 0))) {
								this._errHandler.recoverInline(this);
								}
								else {
									this._errHandler.reportMatch(this);
								    this.consume();
								}
								this.state = 45;
								this.expression(0);
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 48;
							this._errHandler.sync(this);
							_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
						}
						break;
					}
					}
				}
				this.state = 54;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let localctx: FunctionCallContext = new FunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, FormulaParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 55;
			this.functionName();
			this.state = 56;
			this.match(FormulaParser.LPAREN);
			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294965250) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 31727615) !== 0)) {
				{
				this.state = 57;
				this.argList();
				}
			}

			this.state = 60;
			this.match(FormulaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argList(): ArgListContext {
		let localctx: ArgListContext = new ArgListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, FormulaParser.RULE_argList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 62;
			this.expression(0);
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===116) {
				{
				{
				this.state = 63;
				this.match(FormulaParser.COMMA);
				this.state = 64;
				this.expression(0);
				}
				}
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionName(): FunctionNameContext {
		let localctx: FunctionNameContext = new FunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, FormulaParser.RULE_functionName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 70;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294965250) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 8191) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldReference(): FieldReferenceContext {
		let localctx: FieldReferenceContext = new FieldReferenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, FormulaParser.RULE_fieldReference);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 72;
			_la = this._input.LA(1);
			if(!(_la===119 || _la===120)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 11);
		case 1:
			return this.precpred(this._ctx, 10);
		case 2:
			return this.precpred(this._ctx, 9);
		case 3:
			return this.precpred(this._ctx, 7);
		case 4:
			return this.precpred(this._ctx, 6);
		case 5:
			return this.precpred(this._ctx, 8);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,120,75,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,3,1,27,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,47,8,1,11,1,12,1,48,5,1,51,8,1,10,
	1,12,1,54,9,1,1,2,1,2,1,2,3,2,59,8,2,1,2,1,2,1,3,1,3,1,3,5,3,66,8,3,10,
	3,12,3,69,9,3,1,4,1,4,1,5,1,5,1,5,0,1,2,6,0,2,4,6,8,10,0,6,1,0,112,113,
	1,0,110,111,1,0,11,12,1,0,3,9,2,0,1,1,11,108,1,0,119,120,82,0,12,1,0,0,
	0,2,26,1,0,0,0,4,55,1,0,0,0,6,62,1,0,0,0,8,70,1,0,0,0,10,72,1,0,0,0,12,
	13,3,2,1,0,13,14,5,0,0,1,14,1,1,0,0,0,15,16,6,1,-1,0,16,17,5,1,0,0,17,27,
	3,2,1,12,18,19,5,114,0,0,19,20,3,2,1,0,20,21,5,115,0,0,21,27,1,0,0,0,22,
	27,3,4,2,0,23,27,3,10,5,0,24,27,5,118,0,0,25,27,5,117,0,0,26,15,1,0,0,0,
	26,18,1,0,0,0,26,22,1,0,0,0,26,23,1,0,0,0,26,24,1,0,0,0,26,25,1,0,0,0,27,
	52,1,0,0,0,28,29,10,11,0,0,29,30,7,0,0,0,30,51,3,2,1,12,31,32,10,10,0,0,
	32,33,5,2,0,0,33,51,3,2,1,11,34,35,10,9,0,0,35,36,7,1,0,0,36,51,3,2,1,10,
	37,38,10,7,0,0,38,39,5,10,0,0,39,51,3,2,1,8,40,41,10,6,0,0,41,42,7,2,0,
	0,42,51,3,2,1,7,43,46,10,8,0,0,44,45,7,3,0,0,45,47,3,2,1,0,46,44,1,0,0,
	0,47,48,1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,51,1,0,0,0,50,28,1,0,0,0,
	50,31,1,0,0,0,50,34,1,0,0,0,50,37,1,0,0,0,50,40,1,0,0,0,50,43,1,0,0,0,51,
	54,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,3,1,0,0,0,54,52,1,0,0,0,55,56,
	3,8,4,0,56,58,5,114,0,0,57,59,3,6,3,0,58,57,1,0,0,0,58,59,1,0,0,0,59,60,
	1,0,0,0,60,61,5,115,0,0,61,5,1,0,0,0,62,67,3,2,1,0,63,64,5,116,0,0,64,66,
	3,2,1,0,65,63,1,0,0,0,66,69,1,0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,7,1,
	0,0,0,69,67,1,0,0,0,70,71,7,4,0,0,71,9,1,0,0,0,72,73,7,5,0,0,73,11,1,0,
	0,0,6,26,48,50,52,58,67];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FormulaParser.__ATN) {
			FormulaParser.__ATN = new ATNDeserializer().deserialize(FormulaParser._serializedATN);
		}

		return FormulaParser.__ATN;
	}


	static DecisionsToDFA = FormulaParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class FormulaContext extends ParserRuleContext {
	constructor(parser?: FormulaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(FormulaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return FormulaParser.RULE_formula;
	}
	public enterRule(listener: FormulaListener): void {
	    if(listener.enterFormula) {
	 		listener.enterFormula(this);
		}
	}
	public exitRule(listener: FormulaListener): void {
	    if(listener.exitFormula) {
	 		listener.exitFormula(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitFormula) {
			return visitor.visitFormula(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: FormulaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return FormulaParser.RULE_expression;
	}
	public override copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class AddSubtractExprContext extends ExpressionContext {
	constructor(parser: FormulaParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public PLUS(): TerminalNode {
		return this.getToken(FormulaParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(FormulaParser.MINUS, 0);
	}
	public enterRule(listener: FormulaListener): void {
	    if(listener.enterAddSubtractExpr) {
	 		listener.enterAddSubtractExpr(this);
		}
	}
	public exitRule(listener: FormulaListener): void {
	    if(listener.exitAddSubtractExpr) {
	 		listener.exitAddSubtractExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitAddSubtractExpr) {
			return visitor.visitAddSubtractExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExponentExprContext extends ExpressionContext {
	constructor(parser: FormulaParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: FormulaListener): void {
	    if(listener.enterExponentExpr) {
	 		listener.enterExponentExpr(this);
		}
	}
	public exitRule(listener: FormulaListener): void {
	    if(listener.exitExponentExpr) {
	 		listener.exitExponentExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitExponentExpr) {
			return visitor.visitExponentExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FieldRefExprContext extends ExpressionContext {
	constructor(parser: FormulaParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public fieldReference(): FieldReferenceContext {
		return this.getTypedRuleContext(FieldReferenceContext, 0) as FieldReferenceContext;
	}
	public enterRule(listener: FormulaListener): void {
	    if(listener.enterFieldRefExpr) {
	 		listener.enterFieldRefExpr(this);
		}
	}
	public exitRule(listener: FormulaListener): void {
	    if(listener.exitFieldRefExpr) {
	 		listener.exitFieldRefExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitFieldRefExpr) {
			return visitor.visitFieldRefExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralExprContext extends ExpressionContext {
	constructor(parser: FormulaParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRING(): TerminalNode {
		return this.getToken(FormulaParser.STRING, 0);
	}
	public enterRule(listener: FormulaListener): void {
	    if(listener.enterStringLiteralExpr) {
	 		listener.enterStringLiteralExpr(this);
		}
	}
	public exitRule(listener: FormulaListener): void {
	    if(listener.exitStringLiteralExpr) {
	 		listener.exitStringLiteralExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitStringLiteralExpr) {
			return visitor.visitStringLiteralExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalAndOrExprContext extends ExpressionContext {
	constructor(parser: FormulaParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: FormulaListener): void {
	    if(listener.enterLogicalAndOrExpr) {
	 		listener.enterLogicalAndOrExpr(this);
		}
	}
	public exitRule(listener: FormulaListener): void {
	    if(listener.exitLogicalAndOrExpr) {
	 		listener.exitLogicalAndOrExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitLogicalAndOrExpr) {
			return visitor.visitLogicalAndOrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallExprContext extends ExpressionContext {
	constructor(parser: FormulaParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public enterRule(listener: FormulaListener): void {
	    if(listener.enterFunctionCallExpr) {
	 		listener.enterFunctionCallExpr(this);
		}
	}
	public exitRule(listener: FormulaListener): void {
	    if(listener.exitFunctionCallExpr) {
	 		listener.exitFunctionCallExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitFunctionCallExpr) {
			return visitor.visitFunctionCallExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericLiteralExprContext extends ExpressionContext {
	constructor(parser: FormulaParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(FormulaParser.NUMBER, 0);
	}
	public enterRule(listener: FormulaListener): void {
	    if(listener.enterNumericLiteralExpr) {
	 		listener.enterNumericLiteralExpr(this);
		}
	}
	public exitRule(listener: FormulaListener): void {
	    if(listener.exitNumericLiteralExpr) {
	 		listener.exitNumericLiteralExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitNumericLiteralExpr) {
			return visitor.visitNumericLiteralExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplyDivideExprContext extends ExpressionContext {
	constructor(parser: FormulaParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public MULT(): TerminalNode {
		return this.getToken(FormulaParser.MULT, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(FormulaParser.DIV, 0);
	}
	public enterRule(listener: FormulaListener): void {
	    if(listener.enterMultiplyDivideExpr) {
	 		listener.enterMultiplyDivideExpr(this);
		}
	}
	public exitRule(listener: FormulaListener): void {
	    if(listener.exitMultiplyDivideExpr) {
	 		listener.exitMultiplyDivideExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitMultiplyDivideExpr) {
			return visitor.visitMultiplyDivideExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComparisonExprContext extends ExpressionContext {
	constructor(parser: FormulaParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: FormulaListener): void {
	    if(listener.enterComparisonExpr) {
	 		listener.enterComparisonExpr(this);
		}
	}
	public exitRule(listener: FormulaListener): void {
	    if(listener.exitComparisonExpr) {
	 		listener.exitComparisonExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitComparisonExpr) {
			return visitor.visitComparisonExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringConcatExprContext extends ExpressionContext {
	constructor(parser: FormulaParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: FormulaListener): void {
	    if(listener.enterStringConcatExpr) {
	 		listener.enterStringConcatExpr(this);
		}
	}
	public exitRule(listener: FormulaListener): void {
	    if(listener.exitStringConcatExpr) {
	 		listener.exitStringConcatExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitStringConcatExpr) {
			return visitor.visitStringConcatExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotOpExprContext extends ExpressionContext {
	constructor(parser: FormulaParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: FormulaListener): void {
	    if(listener.enterNotOpExpr) {
	 		listener.enterNotOpExpr(this);
		}
	}
	public exitRule(listener: FormulaListener): void {
	    if(listener.exitNotOpExpr) {
	 		listener.exitNotOpExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitNotOpExpr) {
			return visitor.visitNotOpExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenExprContext extends ExpressionContext {
	constructor(parser: FormulaParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(FormulaParser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(FormulaParser.RPAREN, 0);
	}
	public enterRule(listener: FormulaListener): void {
	    if(listener.enterParenExpr) {
	 		listener.enterParenExpr(this);
		}
	}
	public exitRule(listener: FormulaListener): void {
	    if(listener.exitParenExpr) {
	 		listener.exitParenExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitParenExpr) {
			return visitor.visitParenExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	constructor(parser?: FormulaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionName(): FunctionNameContext {
		return this.getTypedRuleContext(FunctionNameContext, 0) as FunctionNameContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(FormulaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(FormulaParser.RPAREN, 0);
	}
	public argList(): ArgListContext {
		return this.getTypedRuleContext(ArgListContext, 0) as ArgListContext;
	}
    public get ruleIndex(): number {
    	return FormulaParser.RULE_functionCall;
	}
	public enterRule(listener: FormulaListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: FormulaListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgListContext extends ParserRuleContext {
	constructor(parser?: FormulaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FormulaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FormulaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FormulaParser.RULE_argList;
	}
	public enterRule(listener: FormulaListener): void {
	    if(listener.enterArgList) {
	 		listener.enterArgList(this);
		}
	}
	public exitRule(listener: FormulaListener): void {
	    if(listener.exitArgList) {
	 		listener.exitArgList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitArgList) {
			return visitor.visitArgList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionNameContext extends ParserRuleContext {
	constructor(parser?: FormulaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return FormulaParser.RULE_functionName;
	}
	public enterRule(listener: FormulaListener): void {
	    if(listener.enterFunctionName) {
	 		listener.enterFunctionName(this);
		}
	}
	public exitRule(listener: FormulaListener): void {
	    if(listener.exitFunctionName) {
	 		listener.exitFunctionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitFunctionName) {
			return visitor.visitFunctionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldReferenceContext extends ParserRuleContext {
	constructor(parser?: FormulaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BRACED_FIELD_REF(): TerminalNode {
		return this.getToken(FormulaParser.BRACED_FIELD_REF, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(FormulaParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return FormulaParser.RULE_fieldReference;
	}
	public enterRule(listener: FormulaListener): void {
	    if(listener.enterFieldReference) {
	 		listener.enterFieldReference(this);
		}
	}
	public exitRule(listener: FormulaListener): void {
	    if(listener.exitFieldReference) {
	 		listener.exitFieldReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitFieldReference) {
			return visitor.visitFieldReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
