module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier'
  ],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-use-before-define': 'warn',
    // always import React when using TSX
    'react/jsx-uses-react': 'error'
  }
}
