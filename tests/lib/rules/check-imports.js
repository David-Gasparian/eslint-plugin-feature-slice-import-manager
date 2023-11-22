/**
 * @fileoverview This rule ensures that all import statements within a module of a feature-sliced design adhere to the architecture&#39;s guidelines. It validates that imports are relative and contained within their respective feature modules to maintain modular integrity. The rule prevents imports that reach out of the module&#39;s scope, reinforcing tight coupling within features and loose coupling between them.&#34;
 * @author Davit
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/check-imports"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("check-imports", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
