const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Logic to handle requests
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}).on('error', err => {
  console.error('Server failed to start:', err);
});
