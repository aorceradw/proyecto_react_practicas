## 2025-01-24 - Route-based code splitting
**Learning:** Initial bundle size was 388.56 kB due to static page imports. Implementing React.lazy/Suspense reduced the entry bundle by ~28 kB and deferred ~30 kB of non-critical JS.
**Action:** Always prioritize lazy loading for route-level components to minimize the initial JS payload, especially in portfolios with media-heavy pages.
