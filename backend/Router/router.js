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

module.exports = router;