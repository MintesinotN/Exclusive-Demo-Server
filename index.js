const jsonServer = require('json-server');
const path = require('path');

// Create a new json-server instance
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json')); // Link to db.json
const middlewares = jsonServer.defaults();

// Use default middlewares (like logging, CORS, etc.)
server.use(middlewares);

// Use the router with the database
server.use(router);

// Export the server as a serverless function
module.exports = (req, res) => {
  server.handle(req, res);
};
