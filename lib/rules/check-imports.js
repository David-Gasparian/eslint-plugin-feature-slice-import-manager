const path = require('path');

/**
 * @fileoverview
 * @author Davit
 */
"use strict";

module.exports = {
  // eslint-disable-next-line eslint-plugin/prefer-message-ids
  meta: {
    // eslint-disable-next-line eslint-plugin/require-meta-type
    type: null,
    docs: {
      description: "This rule ensures that all import statements within a module of a feature-sliced design adhere to the architecture's guidelines. It validates that imports are relative and contained within their respective feature modules to maintain modular integrity. The rule prevents imports that reach out of the module's scope, reinforcing tight coupling within features and loose coupling between them.\"",
      recommended: false,
      url: null, 
    },
    messages: {
      relativePath: "The path must be specified as a relative path, not an absolute path.",
    },
    fixable: null, 
    schema: [], 
  },

  create(context) {
    return {
      ImportDeclaration: function(node) {
        const to = node.source.value;
        const from = context.getFilename();

        if(shouldBeRelative(from, to)) {
          context.report({
            node: node,
            messageId: "relativePath",
          });
        }
      },
    };
  },
};

const layers = {
  'app': 'app', 
  'entities': 'entities',  
  'features': 'features', 
  'pages': 'pages', 
  'shared': 'shared', 
  'widgets': 'widgets'
}

const shouldBeRelative = (from, to) => {
  if(isPathRelative(to)) {
    return false;
  }
  
  const toArray = to.split('/');
  const toLayer = toArray[0];
  const toSlice = toArray[1];

  if(!toLayer && !toSlice && !layers[toLayer]) {
    return false;
  }

  const normalizedPath = path.toNamespacedPath(from);

  const projectFrom = normalizedPath.split('src')[1];
  const fromArray = projectFrom.split('\\');

  const fromLayer = fromArray[1];
  const fromSlice = fromArray[2];

  if(!fromLayer && !fromSlice && !layers[fromLayer]) {
    return false;
  }

  return toLayer === fromLayer && toSlice === fromSlice;
}

const isPathRelative = (path) => {
  return  path.startsWith('.') || path.startsWith('./') || path.startsWith('../');
}
