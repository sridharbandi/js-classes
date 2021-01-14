import { readFile, writeFileSync } from 'fs';


writeFileSync('newfile.txt', 'AXONE');

const data = readFileSync('newfile.txt', 'utf8')
console.log(data)