## 2025-01-24 - [Route-based Code Splitting & State Optimization]
**Learning:** Route-based code splitting using `React.lazy` and `Suspense` reduced the main bundle size from 388.56kB to 360.34kB (~28kB reduction). Additionally, moving theme state initialization from `useEffect` to a lazy `useState` initializer prevents unnecessary double-renders and flashes on mount.
**Action:** Use `React.lazy` for route components and prioritize lazy state initialization for values retrieved from `localStorage` or other synchronous I/O.
