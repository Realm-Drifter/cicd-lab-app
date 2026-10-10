const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from the CI/CD Lab!\n');
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});