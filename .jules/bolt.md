# Bolt's Journal - Performance Optimizations

## 2025-03-26 - Database Connection Pooling and Prepared Statements
**Learning:** Using `mysql.createConnection` in a web application is a performance bottleneck and a reliability risk. Each request shares a single connection, leading to queuing. Furthermore, manual reconnection logic is needed if the connection is lost. Switching to `mysql.createPool` allows the application to handle multiple concurrent queries efficiently and automatically manages connection state. Using `pool.execute()` instead of `pool.query()` leverages MySQL prepared statements, which are faster for repeated queries and provide better security.
**Action:** Always prefer `mysql.createPool` and `mysql2/promise` for Node.js Express applications interacting with MySQL. Use `.execute()` for parameterized queries.
