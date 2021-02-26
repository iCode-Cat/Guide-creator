const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({

    title_id:String,
    toggle_title:String,
    content:String

})

const Content = mongoose.model('Content', contentSchema);
module.exports = Content;