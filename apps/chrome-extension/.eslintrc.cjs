/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@vook-client/eslint-config/react.js'],
  rules: {
    '@typescript-eslint/no-unsafe-assignment': 'off',
  },
}
