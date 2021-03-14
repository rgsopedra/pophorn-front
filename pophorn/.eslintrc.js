module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'no-else-return': ['error', { allowElseIf: true }],
    'no-unused-expressions': [
      'error',
      {
        allowTernary: true
      }
    ],
    'no-useless-constructor': 'off',
    'no-underscore-dangle': 'off',
    'comma-dangle': ['error', 'never'],
    'no-console': 1,
    'no-bitwise': 'off',
    'react/display-name': 0,
    semi: ['error', 'never'],
    'react/prefer-stateless-function': 'off',
    'react/destructuring-assignment': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    quotes: ['error', 'single'],
    'react/jsx-props-no-spreading': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    'space-before-function-paren': 'off'
  },
  globals: {
    fetch: false
  }
}
