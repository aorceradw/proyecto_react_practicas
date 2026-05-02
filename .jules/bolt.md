## 2026-05-02 - [Lazy Initialization & Route-based Code Splitting]
**Learning:** Initializing state that depends on `localStorage` inside `useEffect` causes a redundant second render cycle on mount. Using a lazy initializer function in `useState(() => ...)` prevents this "double-render" and ensures the correct theme is applied before the first paint. Additionally, route-based code splitting with `React.lazy` and `Suspense` reduced the main entry bundle size by 28.22 kB (~7.2%) for this portfolio application.

**Action:** Always use lazy initializers for state derived from external I/O (localStorage, cookies) and implement route-level splitting to keep the critical path lean.

## 2026-05-02 - [AnimatePresence with React.lazy]
**Learning:** When using `framer-motion`'s `AnimatePresence` in conjunction with `React.lazy`, the `location` prop must be explicitly passed from `useLocation()` to the `Routes` component. Without this, `AnimatePresence` fails to track route changes correctly, causing exit animations to be skipped as the lazy-loaded component is unmounted before the animation can play.

**Action:** Ensure `<Routes location={location}>` is used when wrapping lazy routes with `AnimatePresence`.
