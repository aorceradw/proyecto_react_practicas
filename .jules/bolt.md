## 2024-11-20 - Theme Initialization Optimization
**Learning:** Using `useEffect` to sync component state with `localStorage` on mount causes a redundant render cycle. Initializing state lazily using a function in `useState` (e.g., `useState(() => localStorage.getItem('...'))`) avoids this extra render and results in cleaner code.
**Action:** Always prefer lazy state initialization for values derived from persistent storage or expensive computations.

## 2024-11-20 - ESLint for Full-Stack Projects
**Learning:** In projects with both frontend (Vite/React) and backend (Node/Express) code, ESLint needs to be configured with both `globals.browser` and `globals.node` to avoid linting errors for environment-specific variables like `process`.
**Action:** Check `eslint.config.js` early to ensure all project environments are covered by global definitions.
