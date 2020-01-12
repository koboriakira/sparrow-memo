module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  // add your custom rules here
  rules: {
    "space-before-function-paren": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": "off",
    quotes: "off",
    semi: "off"
  }
};
