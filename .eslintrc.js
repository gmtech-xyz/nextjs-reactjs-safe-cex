// eslint-disable-next-line import/no-commonjs
module.exports = {
  extends: [
    'algolia',
    'algolia/react',
    'algolia/typescript',
    'plugin:valtio/recommended',
  ],
  rules: {
    'new-cap': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
