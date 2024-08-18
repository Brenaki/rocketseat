import fs from 'node:fs/promises';

const databasePath = new URL('db.json', import.meta.url);

export class Database {
  #database = {};

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database));
  }
  constructor() {
    fs.readFile(databasePath, 'utf-8')
      .then(data => {
        this.#database = JSON.parse(data);
      })
      .catch(() => {
        this.#persist();
      });
  }

  select(table, search) {
    let data = this.#database[table] ?? [];

    if (search.title !== undefined || search.description !== undefined) {
      data = data.filter(row => {
        return Object.entries(search).some(([key, value]) => {
          if (value === undefined) return false;
          else {
            return row[key].toLowerCase().includes(decodeURIComponent(value.toString().toLowerCase()));
          }
        });
      })
    }

    return data;
  }

  insert(table, data) {
    if (!data.title || !data.description) {
      return false;
    }

    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    this.#persist();

    return data;
  }

  update(table, id, data) {
    const rowIndex = this.#database[table].findIndex(row => row.id === id);

    if (rowIndex > -1) {
      const aux = this.#database[table][rowIndex]
      this.#database[table][rowIndex] = { id, ...aux, title: data.title ? data.title : aux.title, description: data.description ? data.description : aux.description, updated_at: new Date(), completed_at: data.completed_at ? data.completed_at : aux.completed_at };
      this.#persist();
    } else {
      return false;
    }
  }

  delete(table, id) {
    const rowIndex = this.#database[table].findIndex(row => row.id === id);

    if (rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1);
      this.#persist();
    } else {
      return false;
    }
  }
}