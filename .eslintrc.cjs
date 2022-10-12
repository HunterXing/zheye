module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue', '.html', '.cjs'],
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-unused-vars': 1,
    'func-call-spacing': 0,
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0
  }
}
