const http = require('http');

const server = http.createServer((req, res) => {
  // Logic to handle requests
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Unexpected behavior: The server crashes immediately after starting without any error message in the console.