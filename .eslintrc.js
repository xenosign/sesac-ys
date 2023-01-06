module.exports = {
  extends: ['airbnb-base'],
  rules: {
    'linebreak-style': 0,
    'no-console': 'off',
    'no-plusplus': 'off',
    intent: 'off',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};

// {
//   "env": {
//       "browser": true,
//       "es2021": true
//   },
//   "extends": [
//       "eslint:recommended",
//       "plugin:react/recommended"
//   ],
//   "parserOptions": {
//       "ecmaFeatures": {
//           "jsx": true
//       },
//       "ecmaVersion": "latest",
//       "sourceType": "module"
//   },
//   "plugins": [
//       "react",
//       "prettier"
//   ],
//   "rules": {
//     "prettier/prettier": "error"
//   }
// }
