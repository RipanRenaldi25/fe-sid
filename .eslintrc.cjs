module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'import/prefer-default-export': 0,
    'max-len': 0,
    'consistent-return': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/no-array-index-key': 0,
    'import/no-cycle': 0,
    'no-alert': 0,
    'no-console': 0,
  },
};
