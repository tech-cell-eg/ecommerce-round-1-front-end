"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showRestartMessage = void 0;
const vscode_1 = require("vscode");
const showRestartMessage = async () => {
    return vscode_1.window
        .showWarningMessage('Js Jsx Snippets: Please restart VS Code to apply snippet formatting changes', 'Restart VS Code', 'Ignore')
        .then((action) => {
        if (action === 'Restart VS Code') {
            vscode_1.commands.executeCommand('workbench.action.reloadWindow');
        }
    });
};
exports.showRestartMessage = showRestartMessage;
//# sourceMappingURL=show-restart-message.js.map