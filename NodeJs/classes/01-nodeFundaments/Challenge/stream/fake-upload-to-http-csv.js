import fs from 'node:fs';
import { parse } from 'csv-parse';
import { Readable } from 'node:stream';
import fetch from 'node-fetch';

class ReadCSVStream extends Readable {
  constructor() {
    super({ objectMode: true });
    this.csvStream = fs.createReadStream('tasks.csv')
      .pipe(parse({ columns: true }));
    this.csvStream.on('data', (row) => {
      this.push(row);
    });
    this.csvStream.on('end', () => {
      this.push(null);
    });
  }

  _read() {

  }
}

async function processCSV() {
  const csvStream = new ReadCSVStream();
  console.log('Processing CSV file...');

  for await (const row of csvStream) {
    const taskData = {
      title: row.title,
      description: row.description,
    };

    try {
      const response = await fetch('http://localhost:3333/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData),
      });

      if (response.ok) {
        console.log(`Task ${taskData.title} sent successfully`);
      } else {
        console.error(`Error sending task ${taskData.title}: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error sending task: ${error}`);
    }
  }

  console.log('CSV file successfully processed');
}

processCSV();