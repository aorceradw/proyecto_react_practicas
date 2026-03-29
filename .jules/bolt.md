## 2024-03-29 - [Lazy Initialization for LocalStorage]
**Learning:** Using `useEffect` to initialize state from `localStorage` causes a "cascading render" (an extra render cycle after the first paint) and triggers ESLint's `react-hooks/set-state-in-effect` warning. This results in a suboptimal user experience (potential flicker) and inefficient I/O.
**Action:** Use lazy state initialization: `useState(() => localStorage.getItem('key'))`. This ensures the state is correctly set on the *first* render, eliminating the extra render cycle and avoiding linting errors.

## 2024-03-29 - [Node.js Globals in ESLint]
**Learning:** In projects mixing frontend and backend (like Vite + Express), ESLint may fail on `process` or other Node.js globals if they aren't explicitly enabled in the config.
**Action:** Include `...globals.node` in the `languageOptions.globals` section of `eslint.config.js` to ensure tools and server-side scripts are linted correctly without manual overrides.
