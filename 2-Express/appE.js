const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'content-type' : 'text/html '}) // Content type matters (MIME Types MDN)
    res.write('<h1>HOME PAGE</h1>')

    // console.log(req.method);
    //console.log(req.url);
    
    res.end()
})

server.listen(5000)