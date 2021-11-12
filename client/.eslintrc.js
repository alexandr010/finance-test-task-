module.exports = {
  extends: '@mate-academy/eslint-config-react',
  rules: {
    'no-param-reassign': ['error', {
      props: true, ignorePropertyModificationsForRegex: ['^state'],
    }],
  },
};
