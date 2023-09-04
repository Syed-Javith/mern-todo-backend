const mongoose = require('mongoose');
const user = require('./userModel');

const taskSchema = new mongoose.Schema(
    {
        userid :{ type: Number , ref: 'user' } ,
        task : [
            {
        taskid : Number,
        taskDesc : String ,
        taskDate : Date
            }
        ]
    }
)

const task = new mongoose.model('task',taskSchema);

module.exports = task