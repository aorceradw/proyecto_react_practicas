# Bolt's Journal - Critical Learnings

## 2024-05-23 - Bundle Size vs. Interactivity
**Learning:** In this portfolio app, the 'Work' gallery and its dependencies ('framer-motion', etc.) were significantly inflating the initial load. By implementing route-based code splitting, the main bundle size was reduced from 388.56 kB to 368.05 kB (~5.3%).
**Action:** Always check for heavy route-specific components that aren't needed for the landing view.

## 2024-05-23 - Lazy State Initialization
**Learning:** Using `useState(localStorage.getItem('tema'))` causes a synchronous disk read on every component render. Using the lazy initializer `useState(() => localStorage.getItem('tema'))` ensures the read only happens once during the initial mount.
**Action:** Use lazy initializers for any `useState` value derived from expensive operations like `localStorage` or `JSON.parse`.

## 2024-05-23 - AnimatePresence and Lazy Routes
**Learning:** When using `framer-motion`'s `AnimatePresence` with `React.lazy`, the `location` prop must be explicitly passed from `useLocation()` to the `Routes` component. Without this, exit animations can fail to trigger because the `Routes` component doesn't "see" the location change in time to preserve the old component for the exit transition.
**Action:** Always sync `location` to `Routes` when wrapping them in `AnimatePresence` with lazy-loaded components.
