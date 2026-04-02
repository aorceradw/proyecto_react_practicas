## 2025-05-15 - Lazy initialization for state from I/O
**Learning:** Initializing React state directly from `localStorage` or other I/O in the `useState` call (not lazy) causes it to run on every render. Using a `useEffect` to set it after mount causes a double render.
**Action:** Always use lazy initialization `useState(() => localStorage.getItem('...'))` when reading from persistent storage to ensure the I/O only happens once during the initial mount and avoid extra renders.
