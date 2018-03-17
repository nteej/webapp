#!/usr/bin/env node

/** server.js  */

var http = require('http');
var fs = require('fs');
// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
fs.readFile('views/profile.ejs', function(err, data) {
  response.writeHead(200, {"Content-Type": "text/html"});
 response.write(data);
  response.end();
});
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000,'128.199.201.116');

// Put a friendly message on the terminal
console.log("Server running at http://128.199.201.116:8000")
