## 2025-05-15 - [Route-based code splitting and React.lazy compatibility]
**Learning:** Implementing route-based code splitting with `React.lazy` and `AnimatePresence` requires passing the `location` prop to the `Routes` component to ensure exit animations work correctly. Additionally, the named export `React` is not provided by the `react` module in standard Vite/ESM environments, so `Suspense` and `lazy` should be imported as named exports directly.
**Action:** Always verify named imports from the `react` package and ensure `location` is passed to `Routes` when using `AnimatePresence`.
