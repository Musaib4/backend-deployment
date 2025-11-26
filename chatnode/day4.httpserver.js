// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  let body = '';

  req.on('data', chunk => (body += chunk));
  console.log(req.method)

  req.on('end', () => {
    console.log('Body:', body);
    res.end('Got it');
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
