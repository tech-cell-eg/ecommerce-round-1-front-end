"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizePath = exports.normalizePathOrFileUrlToPath = exports.stringsOnly = exports.findTests = exports.readFile = exports.fileExists = void 0;
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("fs"));
const url_1 = tslib_1.__importDefault(require("url"));
const path_1 = tslib_1.__importDefault(require("path"));
function fileExists(path) {
    return new Promise(resolve => {
        fs.access(path, err => resolve(!err));
    });
}
exports.fileExists = fileExists;
function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}
exports.readFile = readFile;
function* findTests(info, filter) {
    if (info.type === 'suite') {
        if (!filter.suites || filter.suites(info)) {
            for (const child of info.children) {
                yield* findTests(child, filter);
            }
        }
    }
    else {
        if (!filter.tests || filter.tests(info)) {
            yield info;
        }
    }
}
exports.findTests = findTests;
function stringsOnly(env) {
    const result = {};
    for (const envVar in env) {
        const val = env[envVar];
        if (typeof val === 'string') {
            result[envVar] = val;
        }
    }
    return result;
}
exports.stringsOnly = stringsOnly;
function normalizePathOrFileUrlToPath(p) {
    if (p === null || p === void 0 ? void 0 : p.startsWith("file://")) {
        p = url_1.default.fileURLToPath(p);
    }
    return normalizePath(p);
}
exports.normalizePathOrFileUrlToPath = normalizePathOrFileUrlToPath;
function normalizePath(p) {
    if (!p) {
        return p;
    }
    if (process.platform === 'win32') {
        const match = /^([a-z]):/.exec(p);
        if (match) {
            p = match[1].toUpperCase() + p.substr(1);
        }
    }
    return path_1.default.normalize(p);
}
exports.normalizePath = normalizePath;
//# sourceMappingURL=util.js.map