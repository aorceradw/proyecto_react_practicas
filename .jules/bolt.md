## 2025-05-15 - Route-based code splitting in Portfolio
**Learning:** In asset-heavy portfolios built with React and Vite, static imports of all pages in App.jsx can significantly bloat the initial entry bundle even if the individual pages aren't complex, due to the way dependencies are pulled into the main chunk. Implementing React.lazy for top-level routes reduced the main bundle size by ~7% immediately.
**Action:** Always prefer route-based lazy loading for main page components to keep the Largest Contentful Paint (LCP) as low as possible.

## 2025-05-15 - Framer Motion and React.lazy
**Learning:** When using framer-motion's AnimatePresence with React.lazy and React Router, the location prop must be passed to the Routes component. Otherwise, the exit animations might fail or trigger incorrectly because the component tree might unmount/remount in a way that confuses the animation engine during chunk loading.
**Action:** Pass `location={location}` from useLocation() to <Routes> when wrapping with AnimatePresence and using Suspense.
