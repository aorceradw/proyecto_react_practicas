## 2025-05-15 - Optimizing Initial Load and Theme Rendering

**Learning:** Static routing in Vite applications can lead to bloated initial bundles if all pages are imported eagerly. Additionally, syncing state from `localStorage` within `useEffect` causes a secondary render cycle on mount, leading to unnecessary work and potential "flashes" of incorrect state.

**Action:** Use `React.lazy` and `Suspense` for all route-level components to enable automatic code-splitting. Always use lazy state initialization (passing a function to `useState`) for values derived from I/O (like `localStorage`) to ensure the correct state is present on the very first render and to satisfy the `react-hooks/set-state-in-effect` linting rule.
