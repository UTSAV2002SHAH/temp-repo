const EventEmitter = require('events')
const customEmitter = new EventEmitter()

// Listen the Event First and then Emit, the Order Matters!!!
customEmitter.on('response', (name)=>{
    console.log(`Your Name is: ${name}`);   
})
customEmitter.on('response', (name,age)=>{
    console.log(`Your Age is : ${age}`);   
})

customEmitter.emit('response', 'Utsav', 21);





// Server Example
const http = require('http')

// const server = http.creatServer((req,res)=>{
//     res.end('Wlc')
// })

//Event Emitter API
const server = http.createServer()
// emits request event
//listen it / and / respond ot it
server.on('request',(req,res) =>{
    console.log(`Request made for ${req.url}`);
    res.end('Welcome');
})

server.listen(5000, ()=>{
    console.log('Server is Listening on port 5000 :');
})