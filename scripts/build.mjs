import { cp, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('..', import.meta.url));
const output = path.join(root, 'dist');
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'config.js', 'favicon.ico', 'assets']) {
  await cp(path.join(root, file), path.join(output, file), { recursive: true });
}
console.log('Prepared board website in dist.');
