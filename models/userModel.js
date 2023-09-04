const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
    {
        userid : Number,
        userName : String ,
        password : String
    }
)

const user = new mongoose.model('user',userSchema);

module.exports = user;