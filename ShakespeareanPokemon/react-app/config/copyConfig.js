const fs = require('fs-extra');
const stdio = require('stdio');

const options = stdio.getopt({
    "environment": { key: "env", description: "Values can be: dev, stage", required: true, default: "dev", args: 1 }
});

const configPath = './build/config.js';

if (fs.existsSync(configPath)) {
    fs.unlinkSync(configPath);
}

var sourceFile = `./config/${options.environment}Config.js`;
fs.copySync(sourceFile, configPath);

console.log("Copied " + sourceFile + " to " + configPath)