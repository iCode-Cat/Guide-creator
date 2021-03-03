const Guide = require('../Models/titleModel');
const Content = require('../Models/contentModel');
const Page = require('../Models/pageModel');

module.exports.title_get = async (req, res) => {
    
    const {pageID} = req.query;
    

    const find = await Guide.find({page_id:pageID}, (err, result) => {
        return !err ? res.header(200).json(result) : ''
    })
    .catch((err) =>console.log(err))
}

module.exports.title_post = async (req, res) => {

    const {
        title, pageID
    } = req.body


    Guide.create({
        title: title,
        page_id:pageID
    }, (err, result) => {
        return !err ? res.send(result) : res.send(err)
    })


}
module.exports.title_put = (req, res) => {


    res.send('PUT')
}

module.exports.title_delete = async (req, res) => {

    const {
        _id
    } = req.body;

    const deleteAll = await Guide.deleteOne({
        _id
    }, (err, result) => {
        return !err ? res.send('ALL DATA HAS BEEN DELETED!') : res.send(err)
    })
}

module.exports.title_find = async (req, res) => {

    const {
        _id
    } = req.body;

    const find = await Guide.find({
        _id
    }, (err, result) => {
        return !err ? res.header(200).json(result) : ''
    })

    console.log(find);

}

//Content API

//Update the content
module.exports.content_put = async (req, res) => {
    const {
        _id,
        title,
        content
    } = req.body;
    const update = await Content.findByIdAndUpdate(_id, {
        toggle_title: title,
        content: content
    })
    console.log(req.body);

}

module.exports.content_get = async (req, res) => {

    const find = await Content.find((err, response) => {
        return !err ? res.header(200).send(response) : res.header(400).send(err)
    })

}

//Find title contents
module.exports.content_post = async (req, res) => {

    const {
        title_id,
        find
    } = req.body;
    const toggle_title = 'YOUR TITLE'
    const content = 'YOUR CONTENT'

    return !find ? Content.create({
        title_id,
        content,
        toggle_title
    }, (err, response) => {
        return !err ? res.header(200).send(response) : res.header(400).send(err)
    }) : Content.find({
        title_id
    }, (err, response) => {
        return !err ? res.header(200).send(response) : res.header(400).send(err)
    })

}

module.exports.content_delete = async (req, res) => {

    const {
        single,
        _id,
        all,
        title_id
    } = req.body
    console.log(all);

    const deleteMany = () => {
        Content.deleteMany((err, result) => {
            return !err ? res.header(200).send('ALL DELETED!') : res.header(400).send(err)
        })
    }

    const deleteSingle = () => {
        if (all) {
            Content.deleteMany({
                title_id
            }, (err, result) => {
                return !err ? res.header(200).send('SINGLE POST DELETED!') : res.header(400).send(err)
            })
        } else {
            Content.deleteOne({
                _id
            }, (err, result) => {
                return !err ? res.header(200).send('SINGLE POST DELETED!') : res.header(400).send(err)
            })
        }
    }


    // Conditinol deleting
    return !single ? deleteMany() : deleteSingle();

}


//Create page
module.exports.page_get = async (req, res) => {

    const {user, page_name} = req.body;

   try {
    const find = await Page.find()
    const results = await res.header(200).send(find)
   } catch (error) {
       const err = await res.header(400).send(error)
   }
    
}

module.exports.page_post = async (req, res) => {
    
    const {user, page_name} = req.body;

    //Create a page
    try {
        
        const create = await Page.create(req.body)
        const send = await res.header(200).send(create)
        console.log(req.body);

    } catch (error) {
        const err = await res.header(400).send(error)
    }

}

module.exports.page_delete = async (req, res) => {

    try {
        const deleteAll = await Page.deleteMany()
        const send = await res.header(200).send('DELETED ALL')
    } catch (error) {
        const err = await res.header(400).send(error)
    }


}

module.exports.page_put = async (req, res) => {

}
        