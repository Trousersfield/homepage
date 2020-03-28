module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'plugin:vue/essential',
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
  ],
  'rules': {
    'semi': [2, 'never'],
    'linebreak-style': 'off',
    'object-curly-spacing': [2, 'always'],
    'comma-dangle': [2, 'never'],
    'space-before-function-paren': [2, 'always'],
    'arrow-parens': 'off'
  },
};
