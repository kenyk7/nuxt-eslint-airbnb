module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
  ],
  // add your custom rules here
  rules: {
    'no-console': 'warn',
    'no-param-reassign': 0,
    'no-nested-ternary': 0,
    'import/no-extraneous-dependencies': 0,
  },
};
