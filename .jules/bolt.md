## 2024-05-24 - Route-Based Code Splitting & Transition Lifecycle
**Learning:** Placing the `Suspense` boundary outside of the `motion.div` responsible for route animations can cause the animation to clip or reset if the chunk takes time to load. To maintain smooth Framer Motion transitions, the `Suspense` boundary should be nested *inside* the animated container or at the route level to ensure the layout remains stable during the transition lifecycle.
**Action:** Always nest `Suspense` within the animation container (e.g., `motion.div`) or use a layout component that wraps the lazy-loaded route to prevent transition interruptions.

## 2024-05-24 - ESLint Global Configuration for Hybrid Environments
**Learning:** In a project with both a React frontend (Vite) and an Express backend, `eslint.config.js` must explicitly include both `globals.browser` and `globals.node` to avoid 'process is not defined' or 'window is not defined' errors across the codebase. Additionally, using `argsIgnorePattern: "^_"` allows for maintaining API contracts (like database callbacks) without triggering `no-unused-vars` errors.
**Action:** Configure `languageOptions.globals` with both `globals.browser` and `globals.node` and set `varsIgnorePattern` and `argsIgnorePattern` to handle library-specific or contract-required unused variables.
