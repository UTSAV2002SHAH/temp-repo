// models are constructors for Schema definition.  An instance of a model is called document
// models are responsible for creating and reading documents 


const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'must be filled'],
        trim:true,
        maxlength:[50,'do not Enter more than 20 characters'],
    },
    completed:{
        type:Boolean,
        default:false
    },
})

module.exports = mongoose.model('Task',TaskSchema)


// // CRUD Opertion provided by mongoose 
// Model.deleteMany()
// Model.deleteOne()
// Model.find()
// Model.findById()
// Model.findByIdAndDelete()
// Model.findByIdAndRemove()
// Model.findByIdAndUpdate()
// Model.findOne()
// Model.findOneAndDelete()
// Model.findOneAndReplace()
// Model.findOneAndUpdate()
// Model.replaceOne()
// Model.updateMany()
// Model.updateOne()