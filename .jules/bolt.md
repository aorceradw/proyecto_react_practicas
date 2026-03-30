## 2025-05-14 - [Lazy State Initialization for Persistence]
**Learning:** Using `useEffect` to sync state with `localStorage` on mount causes an unnecessary re-render and a visible flicker (UI renders with default state, then updates). Lazy initialization in `useState` allows reading from `localStorage` during the initial render pass.
**Action:** Always use `useState(() => localStorage.getItem('key') || default)` when initializing state from external synchronous storage like `localStorage` to ensure the first render is correct and avoid redundant updates.
