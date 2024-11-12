// server.js
var http = require('http');
var dt = require('./mymodule2'); // Import the module

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime()); // Call the function
  res.end();
}).listen(8080);
