## 2025-05-14 - [Route-based Code Splitting with AnimatePresence]
**Learning:** To ensure proper animation transitions when combining 'framer-motion's 'AnimatePresence' with 'React.lazy', the 'Suspense' boundary should be placed inside the 'motion.div' component that handles route animations. If 'Suspense' wraps 'AnimatePresence', the exit transition may be interrupted or skipped entirely while waiting for the next route's chunk to load.
**Action:** Always nest 'Suspense' inside the animated container when using route transitions to preserve the lifecycle of exit animations.

## 2025-05-14 - [Suspense Fallback Height]
**Learning:** Using 'height: 100vh' in a Suspense fallback during route transitions can cause temporary layout shifts and unwanted scrollbars if the previous page hasn't fully exited.
**Action:** Use 'height: 60vh' or 'minHeight' for centered loading states to provide visual feedback without forcing full-page reflows during fast transitions.
