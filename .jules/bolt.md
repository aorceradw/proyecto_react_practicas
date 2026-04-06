## 2025-05-15 - [React.lazy + AnimatePresence Location Prop]
**Learning:** When using `framer-motion`'s `AnimatePresence` with `React.lazy` and `Suspense` for route-based code splitting, the `location` prop (from `useLocation()`) must be passed explicitly to the `Routes` component. Without it, the `AnimatePresence` component cannot correctly track the "exiting" component during a route transition because the `Suspense` wrapper or the lazy-loaded component resolution might interfere with the internal location state tracking.
**Action:** Always pass `location={location}` to `<Routes>` when using `AnimatePresence` in a code-splitted React application.

## 2025-05-15 - [Lazy state initialization vs useEffect]
**Learning:** Accessing `localStorage` or other synchronous I/O in a `useEffect` to initialize state causes an unnecessary double-render on mount and can trigger "cascading render" warnings in development.
**Action:** Use the functional initializer in `useState` (e.g., `useState(() => localStorage.getItem('key'))`) to perform one-time expensive or I/O-bound initialization during the initial render.

## 2025-05-15 - [ESLint false positives with motion tags]
**Learning:** In projects without `eslint-plugin-react`, ESLint's `no-unused-vars` rule may incorrectly flag the `motion` import from `framer-motion` as unused if it is only used as a JSX component (e.g., `<motion.div>`).
**Action:** Update `eslint.config.js` to include `motion` in the `varsIgnorePattern` for the `no-unused-vars` rule to prevent build failures during linting.
