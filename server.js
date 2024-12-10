const jsonServer = require('json-server'); // Import json-server
const server = jsonServer.create(); // Create server instance
const router = jsonServer.router('db.json'); // Link to db.json
const middlewares = jsonServer.defaults(); // Get default middlewares

server.use(middlewares); // Use default middlewares
server.use(router); // Attach the router

const PORT = process.env.PORT || 3000; // Define port
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
