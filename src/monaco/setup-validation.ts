import { CharStream, CommonTokenStream, ParseTreeWalker } from "antlr4";
import {
  IFormulaError,
  MonacEditorMarker,
  MonacGlobalScope,
  MonacoStandaloneEditor,
} from "./types.ts";

import FormulaLexer from "../../generated/FormulaLexer.ts";
import FormulaParser from "../../generated/FormulaParser.ts";
import { SemanticErrorChecker } from "./formula-validation/semantic-error-checker.ts";
import { SyntaxErrorListener } from "./formula-validation/syntax-error-listener.ts";

export function setupValidation(
  monaco: MonacGlobalScope,
  editor: MonacoStandaloneEditor
) {
  let validationTimeout: number;
  editor.onDidChangeModelContent(() => {
    clearTimeout(validationTimeout);
    validationTimeout = setTimeout(performValidation, 500);
  });

  performValidation(monaco, editor);
}

function performValidation(
  monaco: MonacGlobalScope,
  editor: MonacoStandaloneEditor
) {
  const code = editor.getValue();
  const errors = validateCode(code);

  const markers: MonacEditorMarker[] = errors.map((error: IFormulaError) => ({
    message: error.message,
    severity: monaco.MarkerSeverity.Error,
    startLineNumber: error.line,
    startColumn: error.startColumn,
    endLineNumber: error.line,
    endColumn: error.endColumn,
  }));

  const model = editor.getModel();
  if (model) {
    monaco.editor.setModelMarkers(model, "owner", markers);
  }
}

function validateCode(code: string): IFormulaError[] {
  const chars = new CharStream(code);
  const lexer = new FormulaLexer(chars);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new FormulaParser(tokenStream);

  // Do syntax validation
  const errorListener = new SyntaxErrorListener();
  parser.removeErrorListeners();
  parser.addErrorListener(errorListener);
  const tree = parser.formula();
  const allErrors = errorListener.getErrors();

  // Do semantic validation if syntax is correct
  if (allErrors.length === 0) {
    const listener = new SemanticErrorChecker();
    ParseTreeWalker.DEFAULT.walk(listener, tree);
    allErrors.push(...listener.errors);
  }

  return allErrors;
}
