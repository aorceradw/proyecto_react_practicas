## 2025-05-14 - Route-based code splitting with Framer Motion
**Learning:** When using `React.lazy` with `framer-motion`'s `AnimatePresence`, the `location` prop must be passed to the `Routes` component from `useLocation()` to ensure that exit animations trigger correctly. Without it, the component might unmount before the exit animation completes or the chunk might not load in synchronization with the animation cycle.
**Action:** Always pass `location={location}` to `Routes` when wrapping in `AnimatePresence` and using `lazy`.

## 2025-05-14 - Ghost Dependencies (Three.js & GSAP)
**Learning:** The project includes `three` and `gsap` in `package.json`, contributing to a large baseline bundle (388kB+), but these are not currently imported in the `src/` directory. This indicates a high potential for future bundle size reduction by removing unused dependencies or auditing legacy code.
**Action:** Check for unused heavy dependencies in `package.json` before starting localized component optimizations.
