## 2024-05-08 - Route-based code splitting and lazy state initialization
**Learning:** Route-based code splitting using React.lazy and Suspense significantly reduces the initial bundle size (by ~7.2% in this case). Lazy state initialization prevents cascading renders and theme flickering on mount.
**Action:** Always prefer route-based lazy loading for large page components and functional state initialization when reading from localStorage.
