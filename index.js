const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const server = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router);

module.exports = server;
