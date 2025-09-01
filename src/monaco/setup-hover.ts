import { MonacGlobalScope } from "./types";

export function setupHover(monaco: MonacGlobalScope) {
  monaco.languages.registerHoverProvider("softr-formula", {
    provideHover: (model, position) => {
      const word = model.getWordAtPosition(position);
      if (word && word.word === "SUM") {
        return {
          range: new monaco.Range(
            position.lineNumber,
            word.startColumn,
            position.lineNumber,
            word.endColumn
          ),
          contents: [
            { value: "**Sum function**" },
            {
              value: "Sums up the values of all it's arguments.",
            },
          ],
        };
      }

      return null;
    },
  });
}
