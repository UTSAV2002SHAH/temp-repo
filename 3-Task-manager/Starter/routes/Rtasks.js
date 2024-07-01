const express = require('express')
const router = express.Router();

const {getAllTasks, createTask, getTasks,updateTasks,deleteTasks,} = require('../controllers/ConTasks')


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTasks).patch(updateTasks).delete(deleteTasks)

// app.get('/api/v1/tasks')          -get all tasks
// app.post('/api/v1/tasks')         -create new Task
// app.get('/api/v1/tasks/:id')      -get single tasks
// app.patch('/api/v1/tasks:id')     -update tasks
// app.delete('/api/v1/tasks:id')    -delete task tasks


module.exports = router