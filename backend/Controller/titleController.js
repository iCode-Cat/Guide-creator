const Guide = require('../Models/titleModel');






module.exports.title_get = async (req, res) => {

    const {
        pageID
    } = req.query;


    const find = await Guide.find({
            page_id: pageID
        }, (err, result) => {
            return !err ? res.header(200).json(result) : ''
        })
        .catch((err) => console.log(err))
}


module.exports.title_post = async (req, res) => {

    const {
        title,
        pageID
    } = req.body

  

    Guide.create({
        title: title,
        page_id: pageID
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
