const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

username:{
    type:String
},

password:{
    type:String,
    minlegth:6
}

})

const User = mongoose.model('Content', userSchema);
module.exports = User;