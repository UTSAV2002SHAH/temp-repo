//  Synchronous way of reading file content 
const {readFile} = require('fs');

console.log('1st Task Started');
readFile('./content/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    console.log('1st Task completed');
})
console.log('Starting Next task');

// Here the process cuts him self as settimeout function is executed last
console.log('first')
setTimeout(()=>{
    console.log('second');
},1000)
console.log('Third');

// In this Example 
// The process Stays Alive untill you kill it or an unexpected error  occurs.
setInterval(()=>{
    console.log("Hello World");
},2000);
console.log('I will run first');

// Server Example for Event Loop
const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('request Event');
    res.end('Hello world');
});

server.listen(5000, ()=>{
    console.log("Server Listining on port 5000");
});