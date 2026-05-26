## 2024-05-26 - Route-based Code Splitting Impact
**Learning:** Implementing `React.lazy` and `Suspense` for all top-level page components reduced the initial bundle size from 388.56 kB to 360.35 kB (a ~28.21 kB or 7.3% reduction). This was achieved without any loss of functionality or visual regressions, as confirmed by Playwright tests.
**Action:** Always consider route-based code splitting as a first-line optimization for React applications with multiple distinct pages, especially when bundle sizes exceed 300 kB.
