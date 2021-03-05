const Page = require('../Models/pageModel');

//Create page
module.exports.page_get = async (req, res) => {

    const {
        user,
        page_name
    } = req.body;

    try {
        const find = await Page.find()
        const results = await res.header(200).send(find)
    } catch (error) {
        const err = await res.header(400).send(error)
    }

}

module.exports.page_post = async (req, res) => {

    const {
        user,
        page_name
    } = req.body;

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