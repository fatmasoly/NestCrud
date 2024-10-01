module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'commitlint.config.js'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    'max-len': ['error', { ignoreUrls: true, ignoreComments: true }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          constructors: 'no-public',
        },
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        // For functions and variables
        selector: 'default',
        format: ['strictCamelCase'], // (e.g.) myId not myID
      },
      {
        selector: 'interface',
        format: ['PascalCase'], // (e.g.) IMyInterface
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['StrictPascalCase'],
        prefix: ['is', 'has'],
      },
      {
        selector: ['class'],
        format: ['StrictPascalCase'],
      },
      {
        selector: 'property',
        modifiers: ['private'],
        format: ['strictCamelCase'],
        prefix: ['_'],
      },
      {
        selector: 'method',
        modifiers: ['private'],
        format: ['strictCamelCase'],
        prefix: ['_'],
      },
    ],
    // max-lines: 300/file
    'max-lines': [
      'error',
      {
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    // max-lines-per-function: 50/function
    'max-lines-per-function': [
      'error',
      {
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: 'export', next: '*' },
    ],
  },
};