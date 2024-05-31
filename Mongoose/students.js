const mongoose= require('mongoose')
const st_schema= new mongoose.Schema({
    name:String,
    age:Number,
    // hobbies:String,
});

module.exports= mongoose.model('students',st_schema);