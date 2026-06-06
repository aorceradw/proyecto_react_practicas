## 2025-05-15 - Route-based code splitting with React.lazy
**Learning:** Implementing route-based code splitting in a Vite/React project using `React.lazy` and `Suspense` significantly reduces the initial production JS bundle (from 388.56 kB to 360.40 kB, a ~7.2% reduction).
**Action:** Always consider code splitting for page-level components to optimize the critical rendering path, especially in applications with heavy libraries like Framer Motion or Three.js.

## 2025-05-15 - ESLint 'no-unused-vars' with Framer Motion
**Learning:** The project's ESLint config flags `motion` as unused even when used as `motion.div`. Aliasing it to `Motion` satisfies the `varsIgnorePattern: '^[A-Z_]'` rule without needing to change global lint settings.
**Action:** Use PascalCase aliases for library components that trigger false-positive 'unused variable' errors in strict linting environments.
