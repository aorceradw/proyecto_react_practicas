# Bolt's Journal

## 2025-05-15 - [Suspense within AnimatePresence]
**Learning:** When using `framer-motion`'s `AnimatePresence` with `React.lazy`, placing the `Suspense` boundary *inside* the `motion.div` ensures that the exit animation triggers correctly. If `Suspense` is outside, the component might unmount abruptly when a new chunk is loading, breaking the transition lifecycle.
**Action:** Always nest `Suspense` inside the animated container when route-splitting to preserve smooth transitions.

## 2025-05-15 - [Theme Flicker and Lazy State]
**Learning:** Using `useEffect` to sync theme state from `localStorage` causes a double-render: the first render uses the default state, and the second render (after mount) uses the stored value. This results in a visible flicker (FOUC). Using a lazy initializer function in `useState` (`useState(() => ...localStorage.getItem...)`) solves this by reading the value during the very first render.
**Action:** Use lazy state initialization for any UI-critical state that persists in synchronous storage like `localStorage`.
