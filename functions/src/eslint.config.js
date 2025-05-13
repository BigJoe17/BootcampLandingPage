// functions/eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  {
    languageOptions: {
      globals: {
        ...globals.node
      },
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    ignores: ['lib/**', 'node_modules/**']
  },
  js.configs.recommended,
  ...tseslint.configs.recommended
);