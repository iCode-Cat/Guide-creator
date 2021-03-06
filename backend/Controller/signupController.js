const User = require('../Models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//VALIDATION OF USER INPUTS
const Joi = require('@hapi/joi');

    const registerSchema = Joi.object({

    username: Joi.string().required(),
    password: Joi.string().required()

})


//Post
module.exports.register_post = async (req, res) => {

    const {username, password} = req.body;

    //Check whether user email already exists
     const emailExist = await User.findOne({username});
     if(emailExist) {
        res.status(400).send("Email already exists");
        console.log(true);
        return;
     }

     // Hashing the password

     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(password, salt);

     //Add new user
     

    try {
        const create = await User.create({username, password:hashedPassword});
        const result = res.status(200).send(create) 
        //Validation
        
    } catch (error) {
        
        const err = res.status(400).send(error)
        console.log(error);

    }
    
}

//Get
module.exports.register_get = async (req, res) => {
    try {
        const find = await User.find()
        const result = res.status(200).send(find)
    }   catch (error) {
        const err = res.status(400).send(error)
    }
}


//Update
module.exports.register_put = async (req, res) => {}
//Delete
module.exports.register_delete = async (req, res) => {}


//Login controller

//Get
module.exports.login_get = async (req, res) => {}
//Post
module.exports.login_post = async (req, res) => {
    console.log(req.body);
}
//Update
module.exports.login_put = async (req, res) => {}
//Delete
module.exports.login_delete = async (req, res) => {}