// Generated from generated/Formula.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { FormulaContext } from "./FormulaParser.js";
import { AddSubtractExprContext } from "./FormulaParser.js";
import { ExponentExprContext } from "./FormulaParser.js";
import { FieldRefExprContext } from "./FormulaParser.js";
import { StringLiteralExprContext } from "./FormulaParser.js";
import { LogicalAndOrExprContext } from "./FormulaParser.js";
import { FunctionCallExprContext } from "./FormulaParser.js";
import { NumericLiteralExprContext } from "./FormulaParser.js";
import { MultiplyDivideExprContext } from "./FormulaParser.js";
import { ComparisonExprContext } from "./FormulaParser.js";
import { StringConcatExprContext } from "./FormulaParser.js";
import { NotOpExprContext } from "./FormulaParser.js";
import { ParenExprContext } from "./FormulaParser.js";
import { FunctionCallContext } from "./FormulaParser.js";
import { ArgListContext } from "./FormulaParser.js";
import { FunctionNameContext } from "./FormulaParser.js";
import { FieldReferenceContext } from "./FormulaParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `FormulaParser`.
 */
export default class FormulaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `FormulaParser.formula`.
	 * @param ctx the parse tree
	 */
	enterFormula?: (ctx: FormulaContext) => void;
	/**
	 * Exit a parse tree produced by `FormulaParser.formula`.
	 * @param ctx the parse tree
	 */
	exitFormula?: (ctx: FormulaContext) => void;
	/**
	 * Enter a parse tree produced by the `addSubtractExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAddSubtractExpr?: (ctx: AddSubtractExprContext) => void;
	/**
	 * Exit a parse tree produced by the `addSubtractExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAddSubtractExpr?: (ctx: AddSubtractExprContext) => void;
	/**
	 * Enter a parse tree produced by the `exponentExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExponentExpr?: (ctx: ExponentExprContext) => void;
	/**
	 * Exit a parse tree produced by the `exponentExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExponentExpr?: (ctx: ExponentExprContext) => void;
	/**
	 * Enter a parse tree produced by the `fieldRefExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFieldRefExpr?: (ctx: FieldRefExprContext) => void;
	/**
	 * Exit a parse tree produced by the `fieldRefExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFieldRefExpr?: (ctx: FieldRefExprContext) => void;
	/**
	 * Enter a parse tree produced by the `stringLiteralExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterStringLiteralExpr?: (ctx: StringLiteralExprContext) => void;
	/**
	 * Exit a parse tree produced by the `stringLiteralExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitStringLiteralExpr?: (ctx: StringLiteralExprContext) => void;
	/**
	 * Enter a parse tree produced by the `logicalAndOrExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndOrExpr?: (ctx: LogicalAndOrExprContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalAndOrExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndOrExpr?: (ctx: LogicalAndOrExprContext) => void;
	/**
	 * Enter a parse tree produced by the `functionCallExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallExpr?: (ctx: FunctionCallExprContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCallExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallExpr?: (ctx: FunctionCallExprContext) => void;
	/**
	 * Enter a parse tree produced by the `numericLiteralExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteralExpr?: (ctx: NumericLiteralExprContext) => void;
	/**
	 * Exit a parse tree produced by the `numericLiteralExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteralExpr?: (ctx: NumericLiteralExprContext) => void;
	/**
	 * Enter a parse tree produced by the `multiplyDivideExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplyDivideExpr?: (ctx: MultiplyDivideExprContext) => void;
	/**
	 * Exit a parse tree produced by the `multiplyDivideExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplyDivideExpr?: (ctx: MultiplyDivideExprContext) => void;
	/**
	 * Enter a parse tree produced by the `comparisonExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterComparisonExpr?: (ctx: ComparisonExprContext) => void;
	/**
	 * Exit a parse tree produced by the `comparisonExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitComparisonExpr?: (ctx: ComparisonExprContext) => void;
	/**
	 * Enter a parse tree produced by the `stringConcatExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterStringConcatExpr?: (ctx: StringConcatExprContext) => void;
	/**
	 * Exit a parse tree produced by the `stringConcatExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitStringConcatExpr?: (ctx: StringConcatExprContext) => void;
	/**
	 * Enter a parse tree produced by the `notOpExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNotOpExpr?: (ctx: NotOpExprContext) => void;
	/**
	 * Exit a parse tree produced by the `notOpExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNotOpExpr?: (ctx: NotOpExprContext) => void;
	/**
	 * Enter a parse tree produced by the `parenExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParenExpr?: (ctx: ParenExprContext) => void;
	/**
	 * Exit a parse tree produced by the `parenExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParenExpr?: (ctx: ParenExprContext) => void;
	/**
	 * Enter a parse tree produced by `FormulaParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `FormulaParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by `FormulaParser.argList`.
	 * @param ctx the parse tree
	 */
	enterArgList?: (ctx: ArgListContext) => void;
	/**
	 * Exit a parse tree produced by `FormulaParser.argList`.
	 * @param ctx the parse tree
	 */
	exitArgList?: (ctx: ArgListContext) => void;
	/**
	 * Enter a parse tree produced by `FormulaParser.functionName`.
	 * @param ctx the parse tree
	 */
	enterFunctionName?: (ctx: FunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `FormulaParser.functionName`.
	 * @param ctx the parse tree
	 */
	exitFunctionName?: (ctx: FunctionNameContext) => void;
	/**
	 * Enter a parse tree produced by `FormulaParser.fieldReference`.
	 * @param ctx the parse tree
	 */
	enterFieldReference?: (ctx: FieldReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `FormulaParser.fieldReference`.
	 * @param ctx the parse tree
	 */
	exitFieldReference?: (ctx: FieldReferenceContext) => void;
}

