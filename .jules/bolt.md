## 2025-05-15 - [Theme State Initialization Anti-pattern]
**Learning:** Initializing UI state (like themes or auth) using `useEffect` after the first mount causes a redundant render cycle and a visible "flash" of incorrect state. In this codebase, multiple components were using `useEffect` to sync `localStorage` into state.
**Action:** Use lazy state initialization (`useState(() => localStorage.getItem(...))`) to ensure the correct state is present on the very first render, eliminating I/O overhead and layout shifts.

## 2025-05-15 - [AnimatePresence with Route-based Code Splitting]
**Learning:** Combining `framer-motion`'s `AnimatePresence` with `React.lazy` requires strict nesting: the `Suspense` boundary must be *inside* the `motion.div` that is keyed for transitions. If `Suspense` is outside, the transition lifecycle can be interrupted or "stuck" while a chunk loads.
**Action:** Always wrap `<Routes>` (or lazy components) in `<Suspense>` inside the animated container, and ensure `<Routes>` receives the `location` prop to keep route state stable during exit animations.
