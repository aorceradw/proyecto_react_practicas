## 2026-05-30 - [Lazy State Initialization & Code Splitting]
**Learning:** Initializing state from `localStorage` synchronously in a component's body causes it to run on every render. Using a lazy initializer function `useState(() => ...)` ensures the expensive I/O only runs once during the initial mount.
**Action:** Always use lazy initializers for `useState` when the initial value depends on `localStorage`, `sessionStorage`, or complex calculations. Combined this with route-based code splitting to reduce initial bundle size by ~7% (28kB).
