const http = require('http');
const url = require('url');
const fs = require('fs');

const serverPort = 8080;
const urlBase = "http://localhost:8080/"
let filePath = "./"
let statusCode = 200;

// Initialise Web Server
const server = http.createServer((req, res) => {
 console.log(req.url);
  switch(req.url) {
    case "/":
      filePath = `./index.html`
      statusCode = 200;
      break;
    case "/contact":
      filePath = `./contact-me.html`
      statusCode = 200;
      break;
    case "/about":
      filePath = `./about.html`
      statusCode = 200;
      break;
    default:
      filePath = `./404.html`
      statusCode = 404;
      break;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    res.writeHead(statusCode, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
})

// Listen on server
server.listen(serverPort, () => {
    console.log("Server running at port " + serverPort + "...");
});
