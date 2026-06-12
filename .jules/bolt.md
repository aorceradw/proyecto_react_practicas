## 2025-01-24 - Route-based Code Splitting and State Initialization
**Learning:** In a relatively small React application (~390kB), route-based code splitting using `React.lazy` and `Suspense` can still yield a measurable reduction in initial bundle size (~7.2%). Additionally, using lazy initialization in `useState` for side-effect-heavy values like `localStorage` prevents unnecessary re-renders on mount.
**Action:** Always check for `localStorage` access in `useEffect` and refactor to lazy `useState` initialization where possible to minimize mount-time overhead.
