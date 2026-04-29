## 2025-05-14 - Lazy State Initialization vs. UseEffect
**Learning:** Initializing React state using a function in `useState` (lazy initialization) for values stored in `localStorage` prevents the component from rendering twice on mount (once with default, once after `useEffect` update). This eliminates "theme flashing" and reduces main-thread overhead.
**Action:** Always use lazy `useState` initializers for any state that depends on synchronous persistent storage like `localStorage` or `sessionStorage`.

## 2025-05-14 - Route-based Code Splitting and AnimatePresence
**Learning:** Implementing `React.lazy` with `Suspense` successfully reduced the initial bundle size by ~7.2%. However, when paired with `framer-motion`'s `AnimatePresence`, the `location` prop must be passed to the `Routes` component to maintain correct exit animations during the asynchronous loading of route chunks.
**Action:** When adding code splitting to an animated router, ensure the `useLocation()` hook is used to provide a stable location object to the `Routes` component.
