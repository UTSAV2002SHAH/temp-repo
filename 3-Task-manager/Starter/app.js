require('dotenv').config()
const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const tasks = require('./routes/Rtasks')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.static('./public'))
app.use(express.json())

//Routes
app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = 5000

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log("Server Started on port 5000 ...."))
    } catch (error) {
        console.log(error)
    }
}

start()