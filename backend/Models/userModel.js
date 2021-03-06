const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

username:{
    type:String,
    unique:[true, 'This email already exist!'],
    trim: true,
    required:true,
    min:3,
    max:255
},

password:{
    type:String,
    required:true,
    trim: true,
    min:6,
    max:1024
}, 

date: {
    type:Date,
    default: Date.now(),
}

})

const User = mongoose.model('User', userSchema);
module.exports = User;