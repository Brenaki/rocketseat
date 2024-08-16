import http from 'node:http';
import crypto from 'node:crypto';

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'POST' && url === '/users') {
    users.push({
      id: crypto.randomUUID(),
      name: 'John Doe',
      email: 'johndoe@example.com'
    });

    return res
      .writeHead(201, { 'Content-Type': 'application/json' })
      .end();
  };

  if (method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users));
  };

  return res
    .writeHead(404)
    .end();
});

server.listen(3333);