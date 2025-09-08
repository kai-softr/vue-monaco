import { ErrorListener, RecognitionException, Recognizer, Token } from "antlr4";
import { MarkerSeverity } from "monaco-editor";
import { MonacoEditorMarker } from "../types";

export class ParserErrorListener<
  TSymbol extends Token
> extends ErrorListener<TSymbol> {
  private errors: MonacoEditorMarker[] = [];

  syntaxError(
    _recognizer: Recognizer<TSymbol>,
    offendingSymbol: TSymbol,
    line: number,
    column: number,
    message: string,
    _e: RecognitionException | undefined
  ): void {
    this.errors.push({
      message,
      severity: MarkerSeverity.Error,
      startLineNumber: line,
      startColumn: column + 1,
      endLineNumber: line,
      endColumn:
        column + 1 + (offendingSymbol ? offendingSymbol.text.length : 1),
    });
  }

  getErrors(): MonacoEditorMarker[] {
    return this.errors;
  }
}
