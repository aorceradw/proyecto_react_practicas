## 2025-05-14 - Framer Motion with React.lazy
**Learning:** When using `framer-motion`'s `AnimatePresence` with `React.lazy` for route-based code splitting, the `location` prop from `useLocation()` must be explicitly passed to the `Routes` component. Without it, exit animations may fail to trigger correctly during transitions because the `Routes` component won't "remember" the previous route's state while the next chunk is loading.
**Action:** Always pass `location={location}` to the `Routes` component inside `AnimatePresence` when implementing code splitting.
