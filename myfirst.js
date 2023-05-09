var http = require('http');
require('dotenv').config();

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(process.env.INFINITE_SECRETS);
}).listen(8080);