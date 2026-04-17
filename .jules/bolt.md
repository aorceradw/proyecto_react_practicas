## 2026-04-17 - Lazy State Initialization for Theme Toggle
**Learning:** Initializing theme state in a `useEffect` after a default `useState(true)` caused a double-render and potential theme flashing on mount. Using a lazy initializer function in `useState(() => localStorage.getItem('tema'))` ensures the correct initial state is set before the first render, improving performance and UX.
**Action:** Always use lazy initialization for state that depends on `localStorage` or other expensive I/O to prevent redundant renders and UI flickers.
