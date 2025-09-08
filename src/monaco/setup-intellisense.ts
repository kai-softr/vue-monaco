import FormulaLexer from "../../generated/FormulaLexer";
import { MonacGlobalScope } from "./types";

export function setupIntelliSense(monaco: MonacGlobalScope) {
  monaco.languages.registerCompletionItemProvider("softr-formula", {
    provideCompletionItems: (_model, position, _context, _token) => {
      console.warn(position);
      const range = monaco.Range.fromPositions(position);
      console.warn(range);
      // TODO(Kai):
      // - Add field names here
      // - Adjust the kind property so the user can easily differentiate between functions, fields, literals, etc.
      // - Make the suggestion smarter to suggest for a example a closing parenthesis if the user types an opening one
      const suggestions = FormulaLexer.literalNames
        .filter((literal) => literal !== null)
        .map((literal) => literal.replace(/'/g, ""))
        .map((literal) => ({
          label: literal,
          kind: /^\w+$/.test(literal)
            ? monaco.languages.CompletionItemKind.Function
            : monaco.languages.CompletionItemKind.Keyword,
          insertText: literal,
          range,
        }));

      return { suggestions };
    },
  });
}
