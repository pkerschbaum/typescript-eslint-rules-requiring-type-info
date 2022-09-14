module.exports = {
  '**/*': ['prettier --write --ignore-unknown'],
  '**/*.{ts,tsx}': [`pnpm exec eslint --max-warnings 0`],
};
