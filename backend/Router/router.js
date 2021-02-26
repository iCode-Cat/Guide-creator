const {Router} = require('express');
const appController = require('../Controller/appController');
const router = Router();

//Main router title
router.route('/title')
.get(appController.title_get)
.post(appController.title_post)
.put(appController.title_put)
.delete(appController.title_delete)

//Find datas
router.route('/find')
.post(appController.title_find)

//Content data
router.route('/content')
.get(appController.content_get)
.post(appController.content_post)
.put(appController.content_put)
.delete(appController.content_delete)

module.exports = router;