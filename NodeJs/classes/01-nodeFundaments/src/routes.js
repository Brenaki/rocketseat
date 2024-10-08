import { randomUUID } from 'node:crypto';
import { Database } from './database.js';
import { buildRoutePath } from './utils/build-route-path.js';

const database = new Database();

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/users'),
    handler: (req, res) => {
      const { search } = req.query;

      const users = database.select('users', search ? { name: search } : null);

      if (users.length === 0) {
        return res.writeHead(404).end();
      }

      return res.end(JSON.stringify(users));
    }
  },
  {
    method: 'POST',
    path: buildRoutePath('/users'),
    handler: (req, res) => {
      const { name, email } = req.body;

      const user = {
        id: randomUUID(),
        name,
        email
      };

      database.insert('users', user);

      return res.writeHead(201).end();
    }
  },
  {
    method: 'PUT',
    path: buildRoutePath('/users/:id'),
    handler: (req, res) => {
      const { id } = req.params;
      const { name, email } = req.body;

      const user = database.update('users', id, { name, email, });

      if (user == false) {
        return res.writeHead(404).end();
      }

      return res.writeHead(204).end();
    },
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/users/:id'),
    handler: (req, res) => {
      const { id } = req.params;

      const user = database.delete('users', id);

      if (user == false) {
        return res.writeHead(404).end();
      }

      return res.writeHead(204).end();
    }
  },
]