## 2025-06-21 - [Route and Component Code Splitting]
**Learning:** Combining `framer-motion`'s `AnimatePresence` with `React.lazy` requires careful placement of `Suspense`. Placing `Suspense` inside the `motion.div` ensures that transitions are not interrupted by chunk loading, but the `Routes` component must still receive the `location` prop to correctly handle exit animations.
**Action:** Always place `Suspense` inside the animated container and pass `location={location}` to `Routes` when using code splitting with route transitions.

## 2025-06-21 - [Lazy State Initialization]
**Learning:** Initializing state from `localStorage` inside `useEffect` causes a synchronous second render on mount, which can lead to a visible "flash" (FOUC) and layout shifts, especially with lazy routes.
**Action:** Use a lazy initializer function in `useState(() => localStorage.getItem(...))` to ensure the correct state is available during the very first render.
