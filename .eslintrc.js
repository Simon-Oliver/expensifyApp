module.exports = {
  plugins: ['react'],
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'plugin:react/all'],
  globals: {
    document: true,
    foo: true,
    window: true,
    fetch: true,
  },
  rules: {
    'no-plusplus': 'off',
    'prefer-template': 'off',
    'prefer-destructuring': 'off',
    'arrow-body-style': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
