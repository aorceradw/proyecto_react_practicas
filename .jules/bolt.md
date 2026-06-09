## 2025-05-14 - [Route Splitting & Lazy State Initialization]
**Learning:** Initial bundle size was 388kB. Implementing route-based code splitting with React.lazy reduced it by ~28kB (7.2%). Additionally, using lazy initialization for useState (localStorage access) prevents redundant re-renders and UI flickering compared to syncing in useEffect.
**Action:** Always prefer lazy useState initializers for synchronous I/O like localStorage. When using framer-motion with React.lazy, place the Suspense boundary inside the motion container to maintain transition integrity.
