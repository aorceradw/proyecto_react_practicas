## 2025-05-15 - [React Performance & Linting]
**Learning:** Found a common anti-pattern in `ModoClaroOscuro.jsx` where `useEffect` was used to sync `localStorage` with state on mount, causing an unnecessary double-render. Lazy state initialization (`useState(() => ... )`) is the more efficient pattern for this codebase to avoid redundant I/O and rendering cycles.
**Action:** Always check for `useEffect` synchronization with `localStorage` and prefer lazy initialization for `useState`.

**Learning:** The default ESLint configuration was missing `globals.node`, causing failures in `server.js` and `backend/server.js`. Additionally, `framer-motion`'s `motion` components were flagged as unused in JSX due to the lack of `eslint-plugin-react`.
**Action:** Ensure `eslint.config.js` includes `globals.node` and a `varsIgnorePattern` for `motion` when working in this environment.
