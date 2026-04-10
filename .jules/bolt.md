## 2026-04-10 - Route-based code splitting and Framer Motion integration
**Learning:** When using `framer-motion`'s `AnimatePresence` in conjunction with `React.lazy` and `React Router`, the `location` object from `useLocation()` must be explicitly passed to the `Routes` component. Without this, the exit animations may fail to trigger because `AnimatePresence` needs to track the previous location to coordinate the exit of the old component while the new lazy-loaded component is suspended.
**Action:** Always wrap `Routes` in a `motion` component or pass the `location` prop to `Routes` when implementing route-based code splitting with animations.

## 2026-04-10 - Lazy State Initialization
**Learning:** Using `useEffect` to sync state with `localStorage` on mount causes a redundant re-render and can lead to a visible "flash" of the default state before the stored value is applied.
**Action:** Use lazy state initialization in `useState` (e.g., `useState(() => localStorage.getItem('key'))`) to read from I/O sources only once during the initial render.
