import { ParserRuleContext } from "antlr4";

import {
  ArgListContext,
  FieldRefExprContext,
  FunctionNameContext,
} from "../../../generated/FormulaParser.ts";
import FormulaVisitor from "../../../generated/FormulaVisitor.ts";
import { IMonacoModalMarker } from "../types.ts";

export class SemanticErrorChecker<Result> extends FormulaVisitor<Result> {
  public errors: IMonacoModalMarker[] = [];

  public enterFieldRefExpr(ctx: FieldRefExprContext): void {
    const fieldName = ctx.getText();
    if (fieldName === "{field1}" || fieldName === "field1") {
      this.errors.push({
        line: ctx.start.line,
        startColumn: ctx.start.start + 1,
        endColumn: ctx.start.stop + 2,
        message: `Field reference ${fieldName} does not exist.`,
      });
    }
  }

  public enterArgList(ctx: ArgListContext): void {
    if (!ctx.parentCtx) return;
    if (!ctx.parentCtx.children) return;
    if (!(ctx.parentCtx.children[0] instanceof FunctionNameContext)) return;

    const functionNameCtx = ctx.parentCtx.children[0] as FunctionNameContext;
    const functionName = functionNameCtx.getText();
    const argCount = ctx.children?.filter(
      (c) => c instanceof FieldRefExprContext
    ).length;

    if (argCount !== undefined && functionName === "SUM" && argCount < 2) {
      this.errors.push({
        line: functionNameCtx.start.line,
        startColumn: functionNameCtx.start.start,
        endColumn: functionNameCtx.start.stop + 2,
        message: `Function ${functionName} must have at least two arguments but has ${argCount}.`,
      });
    }
  }

  public enterEveryRule(_ctx: ParserRuleContext): void {}
  public exitEveryRule(_ctx: ParserRuleContext): void {}
}
