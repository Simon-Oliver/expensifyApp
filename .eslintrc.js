module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  globals: {
    document: true,
    foo: true,
    window: true,
    fetch: true
  },
  rules: {
    'no-plusplus': 'off',
    'prefer-template': 'off',
    'prefer-destructuring': 'off',
    'arrow-body-style': 'off'
  }
};
