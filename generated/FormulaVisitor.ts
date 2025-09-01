// Generated from generated/Formula.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FormulaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class FormulaVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `FormulaParser.formula`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormula?: (ctx: FormulaContext) => Result;
	/**
	 * Visit a parse tree produced by the `addSubtractExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddSubtractExpr?: (ctx: AddSubtractExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `exponentExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExponentExpr?: (ctx: ExponentExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `fieldRefExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldRefExpr?: (ctx: FieldRefExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `stringLiteralExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteralExpr?: (ctx: StringLiteralExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `logicalAndOrExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndOrExpr?: (ctx: LogicalAndOrExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `functionCallExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallExpr?: (ctx: FunctionCallExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `numericLiteralExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteralExpr?: (ctx: NumericLiteralExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `multiplyDivideExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyDivideExpr?: (ctx: MultiplyDivideExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `comparisonExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonExpr?: (ctx: ComparisonExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `stringConcatExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringConcatExpr?: (ctx: StringConcatExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `notOpExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotOpExpr?: (ctx: NotOpExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `parenExpr`
	 * labeled alternative in `FormulaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenExpr?: (ctx: ParenExprContext) => Result;
	/**
	 * Visit a parse tree produced by `FormulaParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by `FormulaParser.argList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgList?: (ctx: ArgListContext) => Result;
	/**
	 * Visit a parse tree produced by `FormulaParser.functionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionName?: (ctx: FunctionNameContext) => Result;
	/**
	 * Visit a parse tree produced by `FormulaParser.fieldReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldReference?: (ctx: FieldReferenceContext) => Result;
}

