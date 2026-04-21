## 2025-05-14 - Prevent Theme Flash with Lazy Initialization
**Learning:** Using `useEffect` to synchronize state with `localStorage` on mount causes a redundant render cycle and a visible "flash" of the default theme before the stored theme is applied. Lazy initialization in `useState` resolves this by reading from `localStorage` during the initial render.
**Action:** Always use `useState(() => localStorage.getItem('key') || default)` for state that must persist across sessions and affect the initial UI.

## 2025-05-14 - Route-based Code Splitting with Framer Motion
**Learning:** When using `React.lazy` with `framer-motion`'s `AnimatePresence`, the `location` prop must be passed to the `Routes` component from `useLocation()`. Without this, `AnimatePresence` cannot track the "exit" state of the previous route because the `Routes` component internal state updates before the animation can complete.
**Action:** Pass `location={location}` to `<Routes>` when wrapping with `<AnimatePresence>`.
