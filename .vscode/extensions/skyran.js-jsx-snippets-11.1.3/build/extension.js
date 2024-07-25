"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode_1 = require("vscode");
const is_snippets_difference_1 = require("./is-snippets-difference");
const replace_production_snippets_1 = require("./replace-production-snippets");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
async function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    vscode_1.workspace.onDidChangeConfiguration(async ({ affectsConfiguration }) => {
        if (affectsConfiguration('jsJsxSnippets')) {
            await (0, replace_production_snippets_1.replaceProductionSnippets)();
        }
    });
    if ((0, is_snippets_difference_1.isSnippetsDifference)()) {
        await (0, replace_production_snippets_1.replaceProductionSnippets)();
    }
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map