const express = require('express')
const app = express()
const path = require('path')
const logger = require('./logger')

// req => middleware => res
app.use(logger) // To use it everywere
// app.use('/api',logger) It will be applied to all url starting with /api

app.get('/', (req,res)=>{
    res.send('Home')
})

app.get('/about', (req,res)=>{
    res.send('About')
})

app.listen(5000, ()=>{
    console.log('Server Listening on 5000 :')
})