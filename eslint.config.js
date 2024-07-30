// eslint.config.js
import { FlatConfigArray, Linter } from 'eslint';
import reactPlugin from 'eslint-plugin-react';

const config = [
  {
    languageOptions: {
      globals: {
        browser: true,
        es2021: true,
        jest: true,
      },
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'semi': ['error', 'always'],
    },
  },
];

export default config;
