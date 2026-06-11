## 2024-05-24 - [Performance Optimization: Bundle Size and Theme Hydration]

**Learning:** Using `useState(() => localStorage.getItem('theme'))` (lazy state initialization) is significantly more efficient than using `useEffect` to sync state from `localStorage` on mount. The latter causes a redundant double-render: the component first mounts with a default value, then immediately re-renders when the effect runs. Lazy initialization solves this by setting the correct initial state before the first render.

**Action:** Always prefer lazy state initializers when the initial state depends on expensive or synchronous I/O like `localStorage` or `sessionStorage`.

**Learning:** When combining `framer-motion`'s `AnimatePresence` with `React.lazy`, the position of the `Suspense` boundary is critical. Placing `Suspense` *inside* the animated route container (the `motion.div`) prevents layout jumps and ensures that the transition lifecycle isn't prematurely terminated if a chunk takes time to load.

**Action:** Wrap lazy components with `Suspense` at the route level, ensuring the boundary doesn't interfere with parent animation controllers.
