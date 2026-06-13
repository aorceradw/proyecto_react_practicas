## 2026-06-13 - [Suspense Boundary Placement with Route Animations]
**Learning:** Placing a `Suspense` boundary outside of a component that handles route exit animations (like `motion.div` inside `AnimatePresence`) can cause the exit animation to be skipped or interrupted if the next route's chunk is not yet loaded.
**Action:** Always wrap the lazy-loaded component with `Suspense` *inside* the animated container to ensure the transition lifecycle completes correctly while the fallback is shown for the incoming content.
