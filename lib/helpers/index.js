const path = require('path');

function isPathRelative(path) {
    return path === '.' || path.startsWith('./') || path.startsWith('../')
}

function normalizePath(value) {
    return value.split(path.sep).join("/");
}

module.exports = {
    isPathRelative,
    normalizePath,
}
