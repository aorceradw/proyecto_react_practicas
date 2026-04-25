## 2025-05-14 - Bundle Size & Mount Optimization
**Learning:** Route-based code splitting with `React.lazy` and `Suspense` reduced the main entry bundle by ~28kB (7.2%). Additionally, using lazy `useState` initialization for theme state prevents a redundant re-render and the common "flash of unstyled theme" anti-pattern by reading from `localStorage` before the first paint.
**Action:** Always prioritize lazy state initialization over `useEffect` for UI-critical state (like themes or auth tokens) to optimize Largest Contentful Paint (LCP) and prevent layout shifts.
