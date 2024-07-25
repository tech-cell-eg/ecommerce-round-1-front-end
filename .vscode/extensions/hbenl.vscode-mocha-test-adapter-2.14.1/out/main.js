"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const tslib_1 = require("tslib");
const vscode = tslib_1.__importStar(require("vscode"));
const vscode_test_adapter_api_1 = require("vscode-test-adapter-api");
const vscode_test_adapter_util_1 = require("vscode-test-adapter-util");
const configKeys_1 = require("./configKeys");
const adapter_1 = require("./adapter");
function activate(context) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const workspaceFolder = (vscode.workspace.workspaceFolders || [])[0];
        const outputChannel = vscode.window.createOutputChannel('Mocha Tests');
        const log = new vscode_test_adapter_util_1.Log(configKeys_1.configSection, workspaceFolder, 'Mocha Explorer Log');
        const testExplorerExtension = vscode.extensions.getExtension(vscode_test_adapter_api_1.testExplorerExtensionId);
        if (log.enabled)
            log.info(`Test Explorer ${testExplorerExtension ? '' : 'not '}found`);
        if (testExplorerExtension) {
            const testHub = testExplorerExtension.exports;
            const registrar = new vscode_test_adapter_util_1.TestAdapterRegistrar(testHub, (workspaceFolder) => new adapter_1.MochaAdapter(workspaceFolder, context.workspaceState, outputChannel, log), log);
            context.subscriptions.push(registrar);
            context.subscriptions.push(vscode.commands.registerCommand('mocha-explorer.enable', () => enableAdapter(registrar)));
            context.subscriptions.push(vscode.commands.registerCommand('mocha-explorer.disable', () => disableAdapter(registrar)));
        }
    });
}
exports.activate = activate;
function enableAdapter(registrar) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const workspaceFolder = yield chooseWorkspaceFolder('Select the workspace folder for which you want to enable Mocha Test Explorer');
        if (workspaceFolder) {
            const adapter = registrar.getAdapter(workspaceFolder);
            if (adapter) {
                adapter.enable();
            }
        }
    });
}
function disableAdapter(registrar) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const workspaceFolder = yield chooseWorkspaceFolder('Select the workspace folder for which you want to disable Mocha Test Explorer');
        if (workspaceFolder) {
            const adapter = registrar.getAdapter(workspaceFolder);
            if (adapter) {
                adapter.disable();
            }
        }
    });
}
function chooseWorkspaceFolder(msg) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (workspaceFolders && workspaceFolders.length > 0) {
            if (workspaceFolders.length === 1) {
                return workspaceFolders[0];
            }
            else {
                const workspaceFolderName = yield vscode.window.showQuickPick(workspaceFolders.map(wsf => wsf.name), { placeHolder: msg });
                return workspaceFolders.find(wsf => (wsf.name === workspaceFolderName));
            }
        }
        else {
            return undefined;
        }
    });
}
//# sourceMappingURL=main.js.map