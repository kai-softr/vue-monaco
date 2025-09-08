import { CharStream, CommonTokenStream, ParseTreeWalker } from "antlr4";
import {
  MonacGlobalScope,
  MonacoEditorMarker,
  MonacoStandaloneEditor,
} from "./types.ts";

import FormulaLexer from "../../generated/FormulaLexer.ts";
import FormulaParser from "../../generated/FormulaParser.ts";
import { LexerErrorListener } from "./formula-validation/lexer-error-listener.ts";
import { ParserErrorListener } from "./formula-validation/parser-error-listener.ts";
import { SemanticErrorChecker } from "./formula-validation/semantic-error-checker.ts";

export function setupValidation(
  monaco: MonacGlobalScope,
  editor: MonacoStandaloneEditor
) {
  let validationTimeout: number;
  editor.onDidChangeModelContent(() => {
    clearTimeout(validationTimeout);
    validationTimeout = setTimeout(
      () => performValidation(monaco, editor),
      500
    );
  });

  performValidation(monaco, editor);
}

function performValidation(
  monaco: MonacGlobalScope,
  editor: MonacoStandaloneEditor
) {
  const code = editor.getValue();
  const markers = validateCode(code);

  const model = editor.getModel();
  if (model) {
    monaco.editor.setModelMarkers(model, "owner", markers);
  }
}

function validateCode(code: string): MonacoEditorMarker[] {
  const chars = new CharStream(code);
  const lexer = new FormulaLexer(chars);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new FormulaParser(tokenStream);

  const lexerErrorListener = new LexerErrorListener();
  lexer.removeErrorListeners();
  lexer.addErrorListener(lexerErrorListener);

  const parserErrorListener = new ParserErrorListener();
  parser.removeErrorListeners();
  parser.addErrorListener(parserErrorListener);

  const tree = parser.formula();
  const allErrors = lexerErrorListener.getErrors().length
    ? lexerErrorListener.getErrors()
    : parserErrorListener.getErrors();

  // Do semantic validation if syntax is correct
  if (allErrors.length === 0) {
    const listener = new SemanticErrorChecker();
    ParseTreeWalker.DEFAULT.walk(listener, tree);
    allErrors.push(...listener.errors);
  }

  return allErrors;
}
