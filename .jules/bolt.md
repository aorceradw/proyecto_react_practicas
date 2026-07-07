## 2025-05-15 - Lazy State Initialization for External Sync

**Learning:** Syncing React state with `localStorage` (or other external sources) inside `useEffect` causes a redundant second render cycle on mount, often leading to theme flashing. Using a lazy initializer in `useState` allows the state to be set correctly during the initial render.

**Action:** Always prefer `useState(() => localStorage.getItem('key'))` over `useEffect` for initializing state from persistent storage.
