import { randomUUID } from 'node:crypto';
import { buildRoutePath } from './utils/build-route-path.js';
import { Database } from './db/database.js';

const database = new Database();

export const routes = [
  {
    path: buildRoutePath('/tasks'),
    method: 'POST',
    handler: (req, res) => {
      if (!req.body.title || !req.body.description || req.body.title === '' || req.body.description === '' || req.body.title === null || req.body.description === null) {
        return res.writeHead(400).end(JSON.stringify({ error: 'A tarefa precisa de um título e descrição.' }));
      }
      const { title, description } = req.body;

      const task = {
        id: randomUUID(),
        title,
        description,
        created_at: new Date(),
        updated_at: new Date(),
        completed_at: null
      };

      const tasks = database.insert('tasks', task);

      return res.writeHead(201).end();
    }
  },
  {
    path: buildRoutePath('/tasks'),
    method: 'GET',
    handler: (req, res) => {
      const { title, description } = req.query;

      const tasks = database.select('tasks', req.query ? { title, description } : null);

      if (tasks.length === 0) {
        return res.writeHead(404).end();;
      }
      if (tasks === false) {
        return res.writeHead(400).end();
      }

      return res.end(JSON.stringify(tasks));
    }
  },
  {
    path: buildRoutePath('/tasks/:id'),
    method: 'PUT',
    handler: (req, res) => {
      const { id } = req.params;
      const { title, description } = req.body;

      const tasks = database.update('tasks', id, { title, description });

      if (tasks === false) {
        return res.writeHead(404).end(JSON.stringify({ error: 'Id não encontrado' }));
      }

      res.end();
    }
  },
  {
    path: buildRoutePath('/tasks/:id'),
    method: 'DELETE',
    handler: (req, res) => {
      const { id } = req.params;

      const tasks = database.delete('tasks', id);

      if (tasks === false) {
        return res.writeHead(404).end(JSON.stringify({ error: 'Id não encontrado' }));
      }

      return res.writeHead(204).end();
    }
  },
  {
    path: buildRoutePath('/tasks/:id/complete'),
    method: 'PATCH',
    handler: (req, res) => {
      const { id } = req.params;

      const tasks = database.update('tasks', id, { completed_at: new Date() });

      if (tasks === false) {
        return res.writeHead(404).end(JSON.stringify({ error: 'Id não encontrado' }));
      }

      res.end();
    }
  }
]