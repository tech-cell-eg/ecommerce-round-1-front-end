"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSnippetsDifference = void 0;
const vscode_1 = require("vscode");
const javascript_snippets_json_1 = __importDefault(require("../snippets/javascript-snippets.json"));
const js_import_react_on_top_semicolon_json_1 = __importDefault(require("../snippets/js-import-react-on-top-semicolon.json"));
const js_import_react_on_top_json_1 = __importDefault(require("../snippets/js-import-react-on-top.json"));
const js_semicolon_json_1 = __importDefault(require("../snippets/js-semicolon.json"));
const js_json_1 = __importDefault(require("../snippets/js.json"));
const ts_import_react_on_top_semicolon_json_1 = __importDefault(require("../snippets/ts-import-react-on-top-semicolon.json"));
const ts_import_react_on_top_json_1 = __importDefault(require("../snippets/ts-import-react-on-top.json"));
const ts_semicolon_json_1 = __importDefault(require("../snippets/ts-semicolon.json"));
const ts_json_1 = __importDefault(require("../snippets/ts.json"));
const typescript_snippets_json_1 = __importDefault(require("../snippets/typescript-snippets.json"));
const isSnippetsDifference = () => {
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
    const jsSnippets = snippets[jsKey] || snippets.jsImportReactOnTopSemicolon;
    const tsSnippets = snippets[tsKey] || snippets.tsImportReactOnTopSemicolon;
    return (JSON.stringify(jsSnippets) !== JSON.stringify(javascript_snippets_json_1.default) ||
        JSON.stringify(tsSnippets) !== JSON.stringify(typescript_snippets_json_1.default));
};
exports.isSnippetsDifference = isSnippetsDifference;
//# sourceMappingURL=is-snippets-difference.js.map