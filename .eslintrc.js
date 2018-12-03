module.exports = {
  "env": {
    browser: true,
    es6: true,
    jest: true,
  },
  "extends": "eslint-config-airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  }
}