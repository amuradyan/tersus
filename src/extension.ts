import * as vscode from "vscode";
import * as path from "path";

let d1: vscode.TextEditorDecorationType;
let d2: vscode.TextEditorDecorationType;

export function activate(_: vscode.ExtensionContext) {
  let isExtensionEnabled = true;

  vscode.commands.registerCommand("extension.tersusEnable", () => {
    isExtensionEnabled = true;
    setRelativeLineDecorations();
  });

  vscode.commands.registerCommand("extension.tersusDisable", () => {
    const editor = vscode.window.activeTextEditor;
    isExtensionEnabled = false;

    if (editor) {
      if (d1) editor.setDecorations(d1, []);
      if (d2) editor.setDecorations(d2, []);
    }
  });

  vscode.window.onDidChangeTextEditorSelection(
    (_: vscode.TextEditorSelectionChangeEvent) => {
      if (!isExtensionEnabled) return;

      setRelativeLineDecorations();
    }
  );

  function setRelativeLineDecorations(): void {
    const editor = vscode.window.activeTextEditor;

    if (editor) {
      let line = editor.selection.active.line;
      let rangesForDecoration: vscode.Range[] = [];

      if (d2) editor.setDecorations(d2, []);

      d1 = vscode.window.createTextEditorDecorationType(<any>{
        gutterIconPath: path.join(
          __dirname,
          "..",
          "..",
          "images",
          (line + 1) + ".png"
        ),
        gutterIconSize: "cover"
      });
      rangesForDecoration.push(new vscode.Range(line, 0, line, 0));
      editor.setDecorations(d1, rangesForDecoration);

      d2 = d1;
    }
  }
}

export function deactivate() {}
