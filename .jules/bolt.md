## 2025-05-14 - Route-based Code Splitting & Lazy State
**Learning:** Monolithic imports in `App.jsx` created a 388kB initial bundle. Implementing `React.lazy` reduced this by ~7%. However, when using `AnimatePresence` with `lazy`, the `location` prop must be passed to `<Routes>` to prevent exit animations from breaking during the "Suspense" phase. Additionally, `localStorage` access in `useState` should always use the functional initializer `() => ...` to avoid redundant disk I/O on every render.
**Action:** Always check `App.jsx` for monolithic imports and use `useLocation()` with `AnimatePresence` when lazy loading routes.

## 2025-05-14 - ESLint Environment for Full-stack Projects
**Learning:** In projects where backend (`server.js`) and frontend coexist, the default Vite ESLint config often misses `globals.node`. This causes linting failures on `process` or `__dirname`, blocking the build pipeline.
**Action:** Ensure `languageOptions.globals` includes `globals.node` in `eslint.config.js`.
