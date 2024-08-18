import fs from 'node:fs';
import { parse } from 'csv-parse';

const csvData = fs.createReadStream('tasks.csv')
  .pipe(parse({ columns: true }))
  .on('data', (row) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
