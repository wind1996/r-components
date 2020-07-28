module.exports = {
  plugins: [
    'stylelint-order',
  ],
  rules: {
    // 'color-hex-case': ['upper', { severity: 'error' }],
    'color-hex-length': ['long', { severity: 'warn' }],
    'no-duplicate-at-import-rules': true,
    'function-max-empty-lines': 0,
    'comment-empty-line-before': ['always', {
      ignore: ['stylelint-commands', 'after-comment'],
    }],
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'unit-whitelist': ['em', 'rem', '%', 's', 'px', 'vh', 'deg', 'ms'],
    indentation: [2, { severity: 'error' }],
    'color-no-invalid-hex': true,
    'block-no-empty': true,
    'function-calc-no-unspaced-operator': true,
    'property-no-unknown': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'declaration-block-no-duplicate-properties': true,
    'no-invalid-double-slash-comments': true,
    'comment-no-empty': true,
    'selector-pseudo-element-colon-notation': 'double',
    'declaration-block-semicolon-newline-after': 'always',
  },
};
