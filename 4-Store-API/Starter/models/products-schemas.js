const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Must provide product Name'],
    },
    price:{
        type:Number,
        required:[true, 'Must provide product price'],
    },
    Featured:{
        type:Boolean,
        default:false,
    },
    Rating:{
        type:Number,
        default: 4.5,
    },
    CreatedAt:{
        type:Date,
        default:Date.now() 
    },
    company:{
        type:String,
        enum:{
            values : ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported'
        }  
        //enum:['ikea', 'liddy', 'caressa', 'marcos'],
    }
})

module.exports = mongoose.model('Product', productSchema)