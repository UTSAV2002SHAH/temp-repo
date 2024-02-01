const path = require('path');
// // showes path seperetor
// console.log(path.sep);

const filepath = path.join('/content', 'subfoleder', 'test.txt');
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const absoulet = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absoulet)