module.exports = {
  extends: [
    '@titicaca/eslint-config-triple',
    '@titicaca/eslint-config-triple/frontend',
    '@titicaca/eslint-config-triple/requiring-type-checking',
    '@titicaca/eslint-config-triple/prettier',
  ],
  plugins: ['eslint-plugin-simple-import-sort', 'unused-imports'],
  env: {
    es2021: true,
    browser: true,
  },
  ignorePatterns: ['*.md'],
  rules: {
    'react/no-unescaped-entities': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-first-prop-new-line': 'error',
    quotes: ['error', 'single'],
    'eol-last': 'error',
    semi: ['error', 'always'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-unsafe-optional-chaining': 1,
    'unused-imports/no-unused-imports-ts': ['error'],
    'comma-spacing': ['error', { before: false, after: true }],
    'import/no-named-as-default': 'off',
  },
};
