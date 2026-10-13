import { mkdir, copyFile, cp } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
for (const name of ['index.html', 'transition.js']) await copyFile(name, `dist/${name}`);
await cp('assets', 'dist/assets', { recursive: true });
console.log('Standalone static site built in dist/');
