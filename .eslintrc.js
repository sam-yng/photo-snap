export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "indent": "off",
        "react/function-component-definition": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".ts"] }],
        "import/extensions": "off",
        "no-shadow": "off",
        "import/no-unresolved": "off",
        "react/require-default-props": "off",
        "no-plusplus": "off",
        "import/prefer-default-export": "off"
    }
}