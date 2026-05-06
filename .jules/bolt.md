## 2026-05-06 - [Lazy State Initialization & Route Splitting]
**Learning:** Initializing state from `localStorage` inside `useEffect` causes a cascading render (Initial Render -> Effect runs -> State update -> Second Render). This can cause theme flashing and unnecessary layout shifts. Additionally, using `framer-motion`'s `AnimatePresence` with `React.lazy` requires passing the `location` prop to `Routes` to maintain exit animations correctly during chunk loading transitions.

**Action:** Always use lazy state initialization (`useState(() => ...)`) for synchronous data sources like `localStorage` to ensure the component starts with the correct state on the first render. When implementing route-based code splitting, verify that route transitions and animations remain fluid.
