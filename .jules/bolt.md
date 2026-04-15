## 2025-05-14 - Lazy State Initialization and Code Splitting
**Learning:** In React applications with persistent UI state (like themes in localStorage), initializing state with `useEffect` causes a redundant first render with the default state followed by a second render with the persisted state. Using a lazy initializer function in `useState` eliminates this double-render. Additionally, route-based code splitting significantly reduces the main entry bundle size in Vite projects without complex configuration.

**Action:** Always prefer lazy initialization for state derived from `localStorage` or other synchronous I/O. Use `React.lazy` for route components to keep the initial load light.
