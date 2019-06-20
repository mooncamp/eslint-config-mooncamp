module.exports = {
  plugins: [
    'sort-imports-es6-autofix',
  ],
  extends: [
    '@vue/airbnb',
    'plugin:vue/recommended',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'node_modules/@vue/cli-service/webpack.config.js'
      }
    }
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'import/order': 0,
    'import/prefer-default-export': 0,
    'max-len': ['error', { 'code': 120 }],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': ["error", "always", { "js": "never", "vue": "never" }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'object-curly-newline': ['error', {
      'ObjectExpression': { 'multiline': true },
      'ObjectPattern': { 'multiline': true }
    }],
    'sort-imports-es6-autofix/sort-imports-es6': [2, {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
    }],
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always'
    }],
    'vue/order-in-components': [2, {
      order: ['name',
        'props',
        'extends',
        'components',
        'directives',
        'data',
        'computed',
        'methods',
        'watch',
        'filters',
        'LIFECYCLE_HOOKS',
        'mixins',
        ['delimiters', 'functional', 'model', 'parent', 'provide', 'inject', 'el', 'template', 'propsData', 'render', 'renderError'],
      ],
    }],
  },
};
