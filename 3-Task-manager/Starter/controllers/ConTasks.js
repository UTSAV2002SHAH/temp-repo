// here we will set the logic for controlling tasks
const Task = require('../models/ModelTask')
const asyncWrapper = require('../middleware/async')


const getAllTasks = asyncWrapper( async (req,res)=>{
    const tasks = await Task.find({})
    res.status(200).json({tasks})
})


const createTask =asyncWrapper (async (req,res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
})

const getTasks = asyncWrapper(async (req,res)=>{
        
    const { id:taskID } = req.params
    const task = await Task.findOne({_id:taskID })
    if(!task){
        return res.status(404).json({msg:`No task with ID : ${taskID}`})
    }
    res.status(200).json({ task })
})


const deleteTasks = asyncWrapper(async (req,res)=>{
        const { id:taskID } = req.params
        const task = await Task.findOneAndDelete({_id:taskID })
        if(!task){
            res.status(404).json({msg:`No task with ID : ${taskID}`})
        }
        res.status(200).json({task})
        //res.status(200).send()
})


const updateTasks = async (req,res)=>{
    const {id:taskID} = req.params
    const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {new:true, runValidators:true})
    if(!task){
        res.status(404).json({msg:`No task with ID : ${taskID}`})
    }
    res.status(200).json({id:taskID,data:req.body})
}


module.exports = {
    getAllTasks,
    createTask,
    getTasks,
    updateTasks,
    deleteTasks,

}