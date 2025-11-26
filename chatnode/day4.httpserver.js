// server.js
// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;

//   let body = '';

//   req.on('data', chunk => (body += chunk));
//   console.log(req.method)

//   req.on('end', () => {
//     console.log('Body:', body);
//     res.end('Got it');
//   });
// });

// const PORT = 3000;

// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });


// Simple routing (URL path + method)

const url = require('url');

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true); // true -> query as object
  const path = parsed.pathname.replace(/\/+$/,'') || '/'; // normalize
  if (req.method === 'GET' && path === '/') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end('<h1>Home</h1>');
    return;
  }
  if (req.method === 'GET' && path === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end('<h1>About</h1>');
    return;
  }
  // Not found
  res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
  res.end('404 Not Found');
});


