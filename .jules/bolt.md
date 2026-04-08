## 2025-05-22 - ESLint False Positives with Framer Motion
**Learning:** In a project without `eslint-plugin-react`, the ESLint `no-unused-vars` rule may incorrectly flag the `motion` object from `framer-motion` as unused if it is only used in JSX (e.g., `<motion.div>`).
**Action:** Update `eslint.config.js` to include `motion` in the `varsIgnorePattern` of the `no-unused-vars` rule to prevent build failures during linting.

## 2025-05-22 - Node.js Globals in ESLint Flat Config
**Learning:** When using Express within a Vite project (CommonJS or ESM), ESLint 9+ (Flat Config) needs explicit `globals.node` configuration to recognize Node.js globals like `process` or `__dirname` in backend files.
**Action:** Ensure `globals.node` is added to `languageOptions.globals` in `eslint.config.js`.
