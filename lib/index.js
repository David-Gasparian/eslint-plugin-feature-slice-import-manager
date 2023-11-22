/**
 * @fileoverview This ESLint plugin enforces best practices and consistent import ordering specific to the feature-sliced design architecture. It ensures that imports are structured and layered according to the feature-sliced methodology, promoting clean code separation and modular architecture. Ideal for projects seeking to maintain a scalable and organized codebase.
 * @author Davit
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");



