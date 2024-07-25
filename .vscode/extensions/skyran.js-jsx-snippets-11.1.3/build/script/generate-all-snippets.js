"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("fs/promises");
const path_1 = require("path");
const mapValues_1 = __importDefault(require("lodash/mapValues"));
const snippets_template_1 = require("./snippets-template");
const generateNoSemicolonSnippets = async (path, snippets) => {
    const noSemicolonSnippets = (0, mapValues_1.default)(snippets, (snippet) => {
        return {
            ...snippet,
            body: snippet.body.map((line) => line.replace(/;/, '')),
        };
    });
    await (0, promises_1.writeFile)(path, JSON.stringify(noSemicolonSnippets, null, 2));
};
const generateAllSnippets = async () => {
    const tsImportReactOnTopSemicolon = {
        ...snippets_template_1.importPackageSnippets,
        ...snippets_template_1.importReactSnippets,
        ...snippets_template_1.baseSnippets,
        ...snippets_template_1.reactBaseSnippets,
        ...snippets_template_1.jestSnippets,
        ...snippets_template_1.reactNativeSnippets,
        ...snippets_template_1.importReactTsComponentSnippets,
        ...snippets_template_1.reactTsSnippets,
    };
    await (0, promises_1.writeFile)((0, path_1.join)(__dirname, '../../snippets/ts-import-react-on-top-semicolon.json'), JSON.stringify(tsImportReactOnTopSemicolon, null, 2));
    await generateNoSemicolonSnippets((0, path_1.join)(__dirname, '../../snippets/ts-import-react-on-top.json'), tsImportReactOnTopSemicolon);
    const jsImportReactOnTopSemicolon = {
        ...snippets_template_1.importPackageSnippets,
        ...snippets_template_1.importReactSnippets,
        ...snippets_template_1.baseSnippets,
        ...snippets_template_1.reactBaseSnippets,
        ...snippets_template_1.jestSnippets,
        ...snippets_template_1.reactNativeSnippets,
        ...snippets_template_1.importReactJsComponentSnippets,
        ...snippets_template_1.reactJsSnippets,
        ...snippets_template_1.importReactPropTypesComponentSnippets,
        ...snippets_template_1.propTypeSnippets,
    };
    await (0, promises_1.writeFile)((0, path_1.join)(__dirname, '../../snippets/js-import-react-on-top-semicolon.json'), JSON.stringify(jsImportReactOnTopSemicolon, null, 2));
    await generateNoSemicolonSnippets((0, path_1.join)(__dirname, '../../snippets/js-import-react-on-top.json'), jsImportReactOnTopSemicolon);
    const tsSemicolon = {
        ...snippets_template_1.importPackageSnippets,
        ...snippets_template_1.baseSnippets,
        ...snippets_template_1.reactBaseSnippets,
        ...snippets_template_1.jestSnippets,
        ...snippets_template_1.reactNativeSnippets,
        ...snippets_template_1.reactTsComponentSnippets,
        ...snippets_template_1.reactTsSnippets,
    };
    await (0, promises_1.writeFile)((0, path_1.join)(__dirname, '../../snippets/ts-semicolon.json'), JSON.stringify(tsSemicolon, null, 2));
    await generateNoSemicolonSnippets((0, path_1.join)(__dirname, '../../snippets/ts.json'), tsSemicolon);
    const jsSemicolon = {
        ...snippets_template_1.importPackageSnippets,
        ...snippets_template_1.baseSnippets,
        ...snippets_template_1.reactBaseSnippets,
        ...snippets_template_1.jestSnippets,
        ...snippets_template_1.reactNativeSnippets,
        ...snippets_template_1.reactJsComponentSnippets,
        ...snippets_template_1.reactJsSnippets,
        ...snippets_template_1.reactPropTypesComponentSnippets,
        ...snippets_template_1.propTypeSnippets,
    };
    await (0, promises_1.writeFile)((0, path_1.join)(__dirname, '../../snippets/js-semicolon.json'), JSON.stringify(jsSemicolon, null, 2));
    await generateNoSemicolonSnippets((0, path_1.join)(__dirname, '../../snippets/js.json'), jsSemicolon);
};
generateAllSnippets().then(() => {
    console.log('Snippets generated successfully');
});
//# sourceMappingURL=generate-all-snippets.js.map