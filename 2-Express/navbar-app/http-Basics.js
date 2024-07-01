// for better running Copy this code in appE.js and then run it

const http = require('http')
const {readFileSync} = require( 'fs' )

// Get All Files 
const homepage = readFileSync('./navbar-app/index.html')
const homestyle = readFileSync('./navbar-app/style.css')
const homeimage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

// Server Side
const server = http.createServer((req,res)=>{
    const url = req.url
    // console.log(req.url)
    //home page
    if(url === '/'){
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write(homepage)
        res.end();
    }
    // About page
    else if(url === '/about'){
        res.end('About Page')
    }
    else if(url === '/styles.css'){
        res.writeHead(200, {'content-type' : 'text/css'})
        res.write(homestyle)
        res.end();  
    }
    // Image/logo
    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type' : 'image/svgs+xml'})
        res.write(homeimage)
        res.end();  
    }
    // Logic
    else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type' : 'text/javascript'})
        res.write(homeLogic)
        res.end();  
    }
    else {
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write(`<h1>COMMING SOON</h1>`)
        res.end()
    }
    res.end()
})
server.listen(5000, ()=>{
    console.log('port 5000')
})

// console.log(req.method);