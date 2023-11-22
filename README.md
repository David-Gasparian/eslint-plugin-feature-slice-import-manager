# eslint-plugin-feature-slice-import-manager

This ESLint plugin enforces best practices and consistent import ordering specific to the feature-sliced design architecture. It ensures that imports are structured and layered according to the feature-sliced methodology, promoting clean code separation and modular architecture. Ideal for projects seeking to maintain a scalable and organized codebase.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-feature-slice-import-manager`:

```sh
npm install eslint-plugin-feature-slice-import-manager --save-dev
```

## Usage

Add `feature-slice-import-manager` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "feature-slice-import-manager"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "feature-slice-import-manager/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


