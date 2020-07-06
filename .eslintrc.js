module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     htmlWhitespaceSensitivity: 'ignore',
    //     semi: false,
    //     singleQuote: true,
    //   },
    // ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
        },
      },
    ],
    'vue/no-use-v-if-with-v-for': ['off'],
    'vue/component-name-in-template-casing': ['off'],
    'vue/no-unused-components': ['off'],
    eqeqeq: ['off'],
    'no-new': ['off'],
  },
}
