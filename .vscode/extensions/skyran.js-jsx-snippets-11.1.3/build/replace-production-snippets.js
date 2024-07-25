"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceProductionSnippets = void 0;
const promises_1 = require("fs/promises");
const path_1 = require("path");
const vscode_1 = require("vscode");
const js_import_react_on_top_semicolon_json_1 = __importDefault(require("../snippets/js-import-react-on-top-semicolon.json"));
const js_import_react_on_top_json_1 = __importDefault(require("../snippets/js-import-react-on-top.json"));
const js_semicolon_json_1 = __importDefault(require("../snippets/js-semicolon.json"));
const js_json_1 = __importDefault(require("../snippets/js.json"));
const ts_import_react_on_top_semicolon_json_1 = __importDefault(require("../snippets/ts-import-react-on-top-semicolon.json"));
const ts_import_react_on_top_json_1 = __importDefault(require("../snippets/ts-import-react-on-top.json"));
const ts_semicolon_json_1 = __importDefault(require("../snippets/ts-semicolon.json"));
const ts_json_1 = __importDefault(require("../snippets/ts.json"));
const show_restart_message_1 = require("./show-restart-message");
const replaceProductionSnippets = async () => {
    const config = vscode_1.workspace.getConfiguration('jsJsxSnippets.settings');
    const importReactOnTop = config.get('importReactOnTop');
    const typing = config.get('typing');
    const semicolon = config.get('semicolon');
    const snippets = {
        tsImportReactOnTopSemicolon: ts_import_react_on_top_semicolon_json_1.default,
        jsImportReactOnTopSemicolon: js_import_react_on_top_semicolon_json_1.default,
        tsImportReactOnTop: ts_import_react_on_top_json_1.default,
        jsImportReactOnTop: js_import_react_on_top_json_1.default,
        tsSemicolon: ts_semicolon_json_1.default,
        jsSemicolon: js_semicolon_json_1.default,
        ts: ts_json_1.default,
        js: js_json_1.default,
    };
    const jsKey = `js${importReactOnTop ? 'ImportReactOnTop' : ''}${semicolon ? 'Semicolon' : ''}`;
    const tsKey = `${typing ? 'ts' : 'js'}${importReactOnTop ? 'ImportReactOnTop' : ''}${semicolon ? 'Semicolon' : ''}`;
    const jsSnippets = snippets[jsKey];
    const tsSnippets = snippets[tsKey];
    await (0, promises_1.writeFile)((0, path_1.join)(__dirname, '../snippets/javascript-snippets.json'), JSON.stringify(jsSnippets));
    await (0, promises_1.writeFile)((0, path_1.join)(__dirname, '../snippets/typescript-snippets.json'), JSON.stringify(tsSnippets));
    await (0, show_restart_message_1.showRestartMessage)();
};
exports.replaceProductionSnippets = replaceProductionSnippets;
//# sourceMappingURL=replace-production-snippets.js.map