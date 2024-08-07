const express = require('express')
const app = express()
let { people } = require('./data')
//static Asset
app.use(express.static('./FormWebSite'))

// parse from data
app.use(express.urlencoded({extended  : false}))

app.get('./api/people', (req,res)=>{
    res.status(200).json({success : true, data : people})
})

app.post('/login', (req,res)=>{
    const {name} = req.body

    if(name){
        console.log(req.body)
        return res.status(200).send(`Welcome ${name}!!!`)
    }
    res.status(401).send('Credentials Plzzz');
})



app.listen(5000, ()=>{
    console.log('Server listening on port 5000.....')
})