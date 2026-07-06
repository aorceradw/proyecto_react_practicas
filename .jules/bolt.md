## 2025-01-24 - Route-based code splitting for bundle optimization
**Learning:** The initial JavaScript bundle was ~388kB, driven largely by static imports of all page components in the main entry point (`App.jsx`). This app structure is ideal for React.lazy/Suspense because the page components are distinct and heavy.
**Action:** Use `React.lazy` and `Suspense` for all top-level routes to enable chunking and reduce the initial payload. Ensure `AnimatePresence` and `Suspense` are coordinated to avoid layout shifts or broken transitions.
