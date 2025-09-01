import * as monaco from "monaco-editor";

export type MonacGlobalScope = typeof monaco;

export type MonacoStandaloneEditor = monaco.editor.IStandaloneCodeEditor;

export type MonacEditorMarker = monaco.editor.IMarkerData;

export interface IFormulaError {
  line: number;
  startColumn: number;
  endColumn: number;
  message: string;
}
