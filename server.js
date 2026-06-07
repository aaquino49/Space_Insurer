const http = require('http');
const fs   = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
};

http.createServer((req, res) => {
  // Serve index.html for any non-asset request
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  const ext    = path.extname(filePath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Fall back to index.html for unknown paths
      fs.readFile(path.join(__dirname, 'index.html'), (err2, data2) => {
        if (err2) { res.writeHead(500); res.end('Server error'); return; }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data2);
      });
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(port, '0.0.0.0', () => {
  console.log(`Space Insurer running on port ${port}`);
});
