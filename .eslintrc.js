module.exports = {
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    project: `tsconfig.json`,
    sourceType: `module`,
  },
  plugins: [`@typescript-eslint/eslint-plugin`],
  extends: [
    `plugin:import/recommended`,
    `plugin:@typescript-eslint/recommended`,
    `plugin:import/typescript`,
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [`.ts`, `.tsx`],
    },
    'import/resolver': {
      typescript: {
        project: `.`,
      },
    },
  },
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [`.eslintrc.js`],
  rules: {
    'no-console': [
      `warn`,
      {
        allow: [`error`],
      },
    ],
    'import/order': [
      `warn`,
      {
        groups: [
          [`builtin`, `external`],
          `internal`,
          [`parent`, `sibling`, `index`],
        ],
        'newlines-between': `always`,
        alphabetize: {
          order: `asc`,
          caseInsensitive: false,
        },
      },
    ],
    quotes: [`warn`, `backtick`],
    '@typescript-eslint/interface-name-prefix': `off`,
    '@typescript-eslint/explicit-function-return-type': `off`,
    '@typescript-eslint/explicit-module-boundary-types': `off`,
    '@typescript-eslint/no-explicit-any': `off`,
  },
}
