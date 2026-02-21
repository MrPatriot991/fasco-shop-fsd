module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'refactor', 'chore', 'docs', 'test', 'ci', 'perf', 'revert']],
    'scope-case': [2, 'always', 'kebab-case'],
    'subject-case': [0],
  },
};

