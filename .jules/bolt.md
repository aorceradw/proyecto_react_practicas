
## 2026-04-01 - [Route-based Code Splitting & Lazy State]
**Learning:** Initial bundle size was inflated by synchronously importing all route components. Also, using `useEffect` for theme initialization from `localStorage` caused an avoidable re-render on mount.
**Action:** Use `React.lazy()` and `Suspense` for all routes to reduce entry point weight. Use lazy initialization in `useState` (e.g., `useState(() => localStorage.getItem('theme'))`) to eliminate mount-time re-renders.
