const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({

    
    page_name:String,
    username:String

})

const Page = mongoose.model('Page', pageSchema);
module.exports = Page;