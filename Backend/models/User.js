const mongoose = require("mongoose")
const { Schema } = mongoose;
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now,
        unique:true
    }
    
})

module.exports = mongoose.model('user',UserSchema)  // First Argument model name and second argument Schema name

