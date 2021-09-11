module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-extra-boolean-cast': 'off',
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'vue/html-end-tags': 'error',
    'vue/html-indent': [
      'error',
      2
    ],
    'indent': 'off',
    'vue/script-indent': ['error', 2, { 'baseIndent': 1 }],
    'vue/html-self-closing': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/attributes-order': 'error',
    'vue/html-quotes': [
      'error',
      'double'
    ],
    'vue/order-in-components': 'error',
    'vue/attribute-hyphenation': [
      'error',
      'always'
    ]
  }
}
