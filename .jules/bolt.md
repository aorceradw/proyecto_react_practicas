## 2026-05-09 - Route-based code splitting with AnimatePresence
**Learning:** When using React.lazy with framer-motion's AnimatePresence, the location prop must be passed from useLocation() to the Routes component to ensure exit animations trigger correctly during route transitions. Using fallback={null} with Suspense avoids layout shifts.
**Action:** Always ensure the location prop is passed to Routes when implementing lazy loading in an animated application.
