// Generated from /Users/kaischonberger/vs-code-workspace/monaco-antlr-test/Formula.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link FormulaParser}.
 */
public interface FormulaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link FormulaParser#formula}.
	 * @param ctx the parse tree
	 */
	void enterFormula(FormulaParser.FormulaContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormulaParser#formula}.
	 * @param ctx the parse tree
	 */
	void exitFormula(FormulaParser.FormulaContext ctx);
	/**
	 * Enter a parse tree produced by the {@code addSubtractExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterAddSubtractExpr(FormulaParser.AddSubtractExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code addSubtractExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitAddSubtractExpr(FormulaParser.AddSubtractExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code exponentExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExponentExpr(FormulaParser.ExponentExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code exponentExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExponentExpr(FormulaParser.ExponentExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code fieldRefExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterFieldRefExpr(FormulaParser.FieldRefExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code fieldRefExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitFieldRefExpr(FormulaParser.FieldRefExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code stringLiteralExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterStringLiteralExpr(FormulaParser.StringLiteralExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code stringLiteralExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitStringLiteralExpr(FormulaParser.StringLiteralExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code logicalAndOrExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterLogicalAndOrExpr(FormulaParser.LogicalAndOrExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code logicalAndOrExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitLogicalAndOrExpr(FormulaParser.LogicalAndOrExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code functionCallExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterFunctionCallExpr(FormulaParser.FunctionCallExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code functionCallExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitFunctionCallExpr(FormulaParser.FunctionCallExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code numericLiteralExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterNumericLiteralExpr(FormulaParser.NumericLiteralExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code numericLiteralExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitNumericLiteralExpr(FormulaParser.NumericLiteralExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code multiplyDivideExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterMultiplyDivideExpr(FormulaParser.MultiplyDivideExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code multiplyDivideExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitMultiplyDivideExpr(FormulaParser.MultiplyDivideExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code comparisonExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterComparisonExpr(FormulaParser.ComparisonExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code comparisonExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitComparisonExpr(FormulaParser.ComparisonExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code stringConcatExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterStringConcatExpr(FormulaParser.StringConcatExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code stringConcatExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitStringConcatExpr(FormulaParser.StringConcatExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code notOpExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterNotOpExpr(FormulaParser.NotOpExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code notOpExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitNotOpExpr(FormulaParser.NotOpExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code parenExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterParenExpr(FormulaParser.ParenExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code parenExpr}
	 * labeled alternative in {@link FormulaParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitParenExpr(FormulaParser.ParenExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormulaParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void enterFunctionCall(FormulaParser.FunctionCallContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormulaParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void exitFunctionCall(FormulaParser.FunctionCallContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormulaParser#argList}.
	 * @param ctx the parse tree
	 */
	void enterArgList(FormulaParser.ArgListContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormulaParser#argList}.
	 * @param ctx the parse tree
	 */
	void exitArgList(FormulaParser.ArgListContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormulaParser#functionName}.
	 * @param ctx the parse tree
	 */
	void enterFunctionName(FormulaParser.FunctionNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormulaParser#functionName}.
	 * @param ctx the parse tree
	 */
	void exitFunctionName(FormulaParser.FunctionNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormulaParser#fieldReference}.
	 * @param ctx the parse tree
	 */
	void enterFieldReference(FormulaParser.FieldReferenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormulaParser#fieldReference}.
	 * @param ctx the parse tree
	 */
	void exitFieldReference(FormulaParser.FieldReferenceContext ctx);
}