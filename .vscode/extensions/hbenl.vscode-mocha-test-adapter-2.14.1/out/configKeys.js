"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configKeys = exports.configSection = void 0;
exports.configSection = 'mochaExplorer';
const rawConfigKeys = {
    files: { onChange: 'reloadTests' },
    ignore: { onChange: 'reloadTests' },
    watch: { onChange: 'reloadConfig' },
    pruneFiles: { onChange: 'retire' },
    env: { onChange: 'reloadTests' },
    envPath: { onChange: 'reloadTests' },
    cwd: { onChange: 'reloadTests' },
    ui: { onChange: 'reloadTests' },
    timeout: { onChange: 'retire' },
    retries: { onChange: 'retire' },
    require: { onChange: 'reloadTests' },
    fullTrace: { onChange: 'reloadConfig' },
    delay: { onChange: 'reloadTests' },
    exit: { onChange: 'reloadConfig' },
    asyncOnly: { onChange: 'retire' },
    parallel: {},
    jobs: {},
    configFile: { onChange: 'reloadTests' },
    pkgFile: { onChange: 'reloadTests' },
    optsFile: { onChange: 'reloadTests' },
    nodePath: { onChange: 'reloadTests' },
    nodeArgv: { onChange: 'reloadTests' },
    mochaPath: { onChange: 'reloadTests' },
    monkeyPatch: { onChange: 'reloadTests' },
    multiFileSuites: { onChange: 'reloadTests' },
    debuggerPort: { onChange: 'reloadConfig' },
    debuggerConfig: { onChange: 'reloadConfig' },
    esmLoader: { onChange: 'reloadTests' },
    globImplementation: { onChange: 'reloadTests' },
    launcherScript: { onChange: 'reloadTests' },
    ipcRole: { onChange: 'reloadTests' },
    ipcPort: { onChange: 'reloadTests' },
    ipcHost: { onChange: 'reloadTests' },
    ipcTimeout: { onChange: 'reloadTests' },
    autoload: { onChange: 'reloadConfig' },
    logpanel: {},
    logfile: {},
};
exports.configKeys = {};
for (const key in rawConfigKeys) {
    exports.configKeys[key] = { key, fullKey: `${exports.configSection}.${key}`, onChange: rawConfigKeys[key].onChange };
}
//# sourceMappingURL=configKeys.js.map