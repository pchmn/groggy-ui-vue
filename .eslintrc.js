
module.exports = {
  env: {
    browser: true, // Allows for the use of predefined global variables for browsers (document, window, etc.)
    jest: true, // Allows for the use of predefined global variables for Jest (describe, test, etc.)
    node: true, // Allows for the use of predefined global variables for Node.js (module, process, etc.)
  },
  extends: [
    "eslint:recommended", // Use the recommened rules from eslint
    "plugin:@typescript-eslint/recommended", // Use the recommended rules from @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Use eslint-config-prettier to disable ESLint formatting rules from @typescript-eslint/eslint-plugin that would conflict with Prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier to display Prettier errors as ESLint errors
    "plugin:vue/vue3-recommended"
  ],
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    },
    sourceType: "module", // Allows for the use of imports
    project: ['./tsconfig.json', './packages/*/tsconfig.json'],
  },
  plugins: [
    "@typescript-eslint", // Allows for manually setting @typescript-eslint/* rules 
    "prettier", // Allows for manually setting prettier/* rules
  ],
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    "prettier/prettier": ["error", { singleQuote: true, jsxSingleQuote: false, printWidth: 120, trailingComma: "none" }],
    "@typescript-eslint/no-explicit-any": "off"
  }
};