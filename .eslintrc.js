// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    'jest/globals': true,
    browser: true
  },
  root: true,
  plugins: ['@typescript-eslint', 'jest', 'prettier', 'jsx-a11y'],
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  rules: {
    'jest/no-alias-methods': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'jest/expect-expect': 'off',
    'jest/no-disabled-tests': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'error',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'off',
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.+(ts|tsx)'],
      rules: {
        'import/first': 'off'
      }
    }
  ],
  settings: {
    react: {
      version: 'detect'
    },
    'import/core-modules': ['aws-sdk', 'aws-lambda', 'logger'],
    'import/resolver': {
      typescript: {
        project: '.'
      }
    }
  }
};
