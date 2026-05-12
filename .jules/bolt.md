
## 2025-05-15 - PR Hygiene and Scope Management
**Learning:** Including generated files (like 'pnpm-lock.yaml') or unrelated linting fixes (scope creep) in a performance optimization PR can overshadow the core improvement and increase review overhead/risk.
**Action:** Always verify the diff before submission to ensure it contains ONLY the requested optimization and minimal, strictly necessary configuration changes. Avoid committing lockfiles unless explicitly required.
