module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-rational-order", "stylelint-prettier/recommended"],
  plugins: ["stylelint-order", "stylelint-scss", "stylelint-less"],
  rules: {
    "alpha-value-notation": "number",
    "color-function-notation": "legacy"
  }
};
