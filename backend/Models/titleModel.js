const mongoose = require('mongoose');

const titleSchema = new mongoose.Schema({

    title:{
        type:String
    },
    
    content:{
        type:Array
    }

})

const Guide = mongoose.model('Guide', titleSchema);
module.exports = Guide;