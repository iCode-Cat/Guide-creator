const Guide = require('../Models/titleModel')

module.exports.title_get = async (req, res) => {
    const find = await Guide.find((err, result) => {
        return !err ? res.header(200).json(result) : ''
    })
}

module.exports.title_post = async (req, res) => {



    Guide.create({
        title: 'ADMIN',
        content:[{TITLE:'HELLO WORLD'},{TITLE:'HELLO WORLD'}]
    }, (err, result) => {
        return !err ? res.send(result) : res.send(err)
    })


}
module.exports.title_put = (req, res) => {
    res.send('PUT')
}
module.exports.title_delete = async (req, res) => {
    const deleteAll = await Guide.deleteMany((err, result) => {
        return !err ? res.send('ALL DATA HAS BEEN DELETED!') : res.send(err)
    })
}

module.exports.title_find = async (req,res) => {

    const {_id} = req.body;

    const find = await Guide.find({_id},(err, result) => {
        return !err ? res.header(200).json(result) : ''
    })

    console.log(find);

}