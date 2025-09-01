import { ErrorListener, RecognitionException, Recognizer, Token } from "antlr4";
import { IFormulaError } from "../types";

export class SyntaxErrorListener<
  TSymbol extends Token
> extends ErrorListener<TSymbol> {
  private errors: IFormulaError[] = [];

  syntaxError(
    _recognizer: Recognizer<TSymbol>,
    offendingSymbol: TSymbol,
    line: number,
    column: number,
    msg: string,
    _e: RecognitionException | undefined
  ): void {
    this.errors.push({
      line: line,
      startColumn: column + 1,
      endColumn:
        column + 1 + (offendingSymbol ? offendingSymbol.text.length : 1),
      message: msg,
    });
  }

  getErrors(): IFormulaError[] {
    return this.errors;
  }
}
