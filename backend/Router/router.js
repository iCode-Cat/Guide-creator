const {Router} = require('express');
const titleController = require('../Controller/titleController');
const contentController = require('../Controller/contentController');
const pageController = require('../Controller/pageController');
const signupController = require('../Controller/signupController');
const router = Router();

//Main router title
router.route('/title')
.get(titleController.title_get)
.post(titleController.title_post)
.put(titleController.title_put)
.delete(titleController.title_delete)

//Find datas
router.route('/find')
.post(titleController.title_find)

//Content data
router.route('/content')
.get(contentController.content_get)
.post(contentController.content_post)
.put(contentController.content_put)
.delete(contentController.content_delete)

//Create page
router.route('/page')
.get(pageController.page_get)
.post(pageController.page_post)
.put(pageController.page_put)
.delete(pageController.page_delete)

//User registration
router.route('/register')
.get(signupController.register_get)
.post(signupController.register_post)
.put(signupController.register_put)
.delete(signupController.register_delete)

//User Login
router.route('/login')
.get(signupController.login_get)
.post(signupController.login_post)
.put(signupController.login_put)
.delete(signupController.login_delete)


module.exports = router;