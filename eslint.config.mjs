import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default [
  { ignores: ['dist/', '.astro/', 'node_modules/', 'public/', 'archive/'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  ...astro.configs['jsx-a11y-recommended'],
  {
    files: ['scripts/**/*.mjs', '*.config.mjs'],
    languageOptions: {
      globals: { process: 'readonly', console: 'readonly', URL: 'readonly', Buffer: 'readonly' },
    },
  },
];
