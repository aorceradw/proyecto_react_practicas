## 2025-05-14 - [Lazy loading and Framer Motion]
**Learning:** When using `framer-motion`'s `AnimatePresence` with `React.lazy`, the `location` prop must be passed to the `Routes` component to ensure exit animations trigger correctly during route transitions. Otherwise, the component might be unmounted before the exit animation finishes because the route change happens independently of the lazy chunk loading.
**Action:** Always pass `location` from `useLocation()` to `Routes` when using `AnimatePresence` and route-based code splitting.

## 2025-05-14 - [Lazy state initialization]
**Learning:** Initializing React state from synchronous I/O like `localStorage` directly in the `useState` call or in a `useEffect` can lead to redundant operations or double-renders.
**Action:** Use a lazy initializer function `useState(() => ...)` to ensure the initialization logic only runs once on mount.
