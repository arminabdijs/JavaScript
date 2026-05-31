const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8000;
const host = '0.0.0.0';

const server = http.createServer((req, res) => {
  let requestUrl = req.url.split('?')[0];

  let filePath = '.' + requestUrl;

  if (filePath === './') {
    filePath = './index.html';
  }

  filePath = path.normalize(filePath);

  const extname = path.extname(filePath);
  let contentType = 'text/html';

  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
    case '.gif':
      contentType = 'image/gif';
      break;
    case '.svg':
      contentType = 'image/svg+xml';
      break;

    case '.html':
      contentType = 'text/html';
      break;
  }

  const absoluteFilePath = path.resolve(__dirname, filePath);

  console.log('Requested URL (cleaned):', requestUrl);
  console.log('Attempting to read file at:', absoluteFilePath);

  fs.readFile(absoluteFilePath, (error, content) => {
    if (error) {
      if (error.code == 'ENOENT') {
        console.error('File not found:', absoluteFilePath);
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Not Found - فایل مورد نظر یافت نشد\n');
      } else {
        console.error('Server error reading file:', error);
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('500 Internal Server Error - خطای داخلی سرور\n');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
  console.log(`Static files are being served from: ${path.resolve(__dirname)}`);
});
