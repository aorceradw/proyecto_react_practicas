## 2025-01-24 - [Lazy Loading & Animation Sync]
**Learning:** When implementing route-based code splitting with `React.lazy` and `framer-motion`'s `AnimatePresence`, the `location` object from `useLocation()` must be explicitly passed to the `Routes` component. Without this, `AnimatePresence` may fail to track the exiting component correctly during lazy-loaded transitions, leading to broken exit animations.
**Action:** Always ensure `<Routes location={location} key={location.pathname}>` is used when combining lazy routes with `AnimatePresence`.

## 2025-01-24 - [Lazy State Initialization]
**Learning:** Using a lazy initializer function in `useState` (e.g., `useState(() => localStorage.getItem('key'))`) not only prevents redundant I/O on every render but also avoids a common "cascade" where a `useEffect` updates state immediately after mount, causing a double-render and potential UI "flicker" (e.g., theme flashing).
**Action:** Prefer lazy state initializers for any state derived from synchronous but relatively expensive sources like `localStorage` or `URLSearchParams`.
