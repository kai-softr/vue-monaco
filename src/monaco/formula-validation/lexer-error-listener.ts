import { ErrorListener, RecognitionException, Recognizer } from "antlr4";
import { MarkerSeverity } from "monaco-editor";
import { MonacoEditorMarker } from "../types";

export class LexerErrorListener<
  TSymbol extends number
> extends ErrorListener<number> {
  private errors: MonacoEditorMarker[] = [];

  syntaxError(
    _recognizer: Recognizer<number>,
    _offendingSymbol: TSymbol,
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
      endColumn: column + 2,
    });
  }

  getErrors(): MonacoEditorMarker[] {
    return this.errors;
  }
}
