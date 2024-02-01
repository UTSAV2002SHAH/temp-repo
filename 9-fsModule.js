// way 1
const {readFileSync, writeFileSync} = require('fs');

// way 2
//const fs = require('fs');
//fs.read

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log(second);

// writeFileSync('./content/result.txt',
//     `here is the result of merging two files: ${first}, ${second}`,
//     //{flag : 'a'}
// );

writeFileSync('./content/result.txt',
    `this should be 2nd line`,
    {flag : 'a'}
);