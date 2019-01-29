const http = require('http');

const config = require('../config');
const app = require('../src/app');

http.createServer(app).listen(config.port);
