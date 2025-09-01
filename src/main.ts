import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import { setupHover } from "./monaco/setup-hover";
import { setupIntelliSense } from "./monaco/setup-intellisense";
import { setupSyntaxColoring } from "./monaco/setup-syntax-coloring";
import { setupValidation } from "./monaco/setup-validation";
import "./style.css"; // Make sure you have a basic style.css file

// This is required for the editor to work with bundlers like Vite
self.MonacoEnvironment = {
  getWorker: function (_moduleId, _label) {
    return new editorWorker();
  },
};

monaco.languages.register({ id: "softr-formula" });

// --- Language Setup ---
setupHover(monaco);
setupIntelliSense(monaco);
setupSyntaxColoring(monaco);

// --- Editor Setup ---
const editorContainer = document.getElementById("editor-container")!;
const editor = monaco.editor.create(editorContainer, {
  value: `SUM({field1}) + 3 + "asdasd"`,
  language: "softr-formula",
  theme: "formulaTheme",
  automaticLayout: true,
});

setupValidation(monaco, editor);
