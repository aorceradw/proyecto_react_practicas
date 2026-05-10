## 2025-01-24 - [Route-based Code Splitting & ESLint Alignment]
**Learning:** The application imported all major route components synchronously in `App.jsx`, causing a bloated initial bundle (389kB). Implementing `React.lazy` reduced the entry bundle by ~28kB (7%). Additionally, the project's ESLint configuration lacked Node.js globals and didn't account for mandatory database callback arguments (like `insertId`), which are required for frontend compatibility but often flagged as unused.

**Action:** Always check `App.jsx` for synchronous route imports in SPAs. When fixing `no-unused-vars` in Express/MySQL callbacks, use an underscore prefix (e.g., `_result`) and ensure `eslint.config.js` is configured with `argsIgnorePattern: ^_` to preserve the API contract while satisfying the linter.
