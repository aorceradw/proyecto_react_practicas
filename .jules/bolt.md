## 2025-05-15 - Route-based code splitting with AnimatePresence
**Learning:** When using `framer-motion`'s `AnimatePresence` with `React.lazy`, the `location` prop must be passed from `useLocation()` to the `Routes` component to ensure exit animations trigger correctly during route transitions.
**Action:** Always ensure `Routes` receives the `location` prop when wrapping it with `Suspense` inside `AnimatePresence`.
