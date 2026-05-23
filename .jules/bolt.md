
## 2025-05-14 - [Lazy State Initialization vs useEffect]
**Learning:** Initializing state from localStorage using a `useEffect` hook causes a redundant double-render on mount (first with default, then with stored value). This also risks a "flash of uninitialized content".
**Action:** Always use a lazy state initializer function in `useState(() => localStorage.getItem(...))` for persistent UI state like themes.

## 2025-05-14 - [React.lazy with framer-motion AnimatePresence]
**Learning:** When using `React.lazy` and `Suspense` inside `AnimatePresence`, the `location` prop must be passed to the `Routes` component to ensure that `AnimatePresence` can track route changes and trigger exit animations correctly.
**Action:** Use `const location = useLocation()` and pass it to `Routes` as `<Routes location={location} key={location.pathname}>`.
