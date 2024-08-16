// process.stdin
//   .pipe(process.stdout);

import { Readable } from 'node:stream';

class OneToHundredStream extends Readable {
  index = 1;
  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        this.push(`${i}\n`);
      }
    }, 1000);
  }
}

new OneToHundredStream()
  .pipe(process.stdout);