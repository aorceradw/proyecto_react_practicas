## 2026-03-28 - Lazy Initialization for Performance
**Learning:** React state initialization with synchronous I/O (like `localStorage.getItem`) in the render body causes unnecessary overhead on every re-render. Using lazy initialization (`useState(() => ...)`) ensures the I/O operation only runs once during the initial mount.
**Action:** Always use lazy initialization for `useState` when the initial value is derived from `localStorage`, `sessionStorage`, or complex calculations to avoid redundant operations during re-renders.
