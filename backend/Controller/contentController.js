const Content = require('../Models/contentModel');

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