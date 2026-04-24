## 2025-05-15 - [Route-based Code Splitting and Lazy State Initialization]
**Learning:** Initial bundle size was inflated by synchronous imports of route components. Using `React.lazy` and `Suspense` effectively reduced the main bundle size by ~28kB (7.3%). Additionally, reading from `localStorage` in `useEffect` caused a double-render on mount; using lazy state initialization in `useState` avoids this and improves TTI.
**Action:** Always prefer `React.lazy` for route components and lazy initialization for `useState` when reading from expensive sources like `localStorage`.
