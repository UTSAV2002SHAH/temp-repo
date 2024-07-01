require('dotenv').config()
require('express-async-errors')
//async errors

const express = require('express');
const app = express();

const connecctDB = require('./db/connect')
const products = require('./routes/Rou-products')



const notfoundmiddleware = require('./middleware/not-found')
const errorhandlersmiddleware = require('./middleware/error-handler')
//middlewares
app.use(express.json())



// routes
    
app.use('/api/v1/products', products)
app.use(notfoundmiddleware);
app.use(errorhandlersmiddleware);

//products routes



const port = 3000

const start = async ()=>{
    try {
        //connectDB
        await connecctDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Serer is listening on port: ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start();

