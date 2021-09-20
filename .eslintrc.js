module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'prettier', 'plugin:prettier/recommended'],
    rules: {
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
            },
        ],
    },
    parserOptions: {
        // parser: 'babel-eslint',
    },
}
