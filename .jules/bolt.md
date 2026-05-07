## 2025-01-24 - [Route Splitting with Framer Motion]
**Learning:** When using `framer-motion`'s `AnimatePresence` with `React.lazy`, the `location` prop must be passed from `useLocation()` to the `Routes` component to ensure exit animations trigger correctly during route transitions. Additionally, using `fallback={null}` in `Suspense` prevents layout shifts during these transitions.
**Action:** Always provide `location` to `Routes` when wrapping with `AnimatePresence` and using lazy routes.

## 2025-01-24 - [ESLint and Framer Motion]
**Learning:** In projects without `eslint-plugin-react`, the `motion` components (e.g., `<motion.div>`) can trigger `no-unused-vars` errors if the `motion` import appears unused.
**Action:** Add `motion` to `varsIgnorePattern` in `eslint.config.js` to prevent false positives.
