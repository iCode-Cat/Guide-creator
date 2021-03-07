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

//Login users

module.exports.login_post = async (req, res) => {
    

    const {username , password} = req.body;

    console.log(req.body);
    //Check whether user email exists
    const user = await User.findOne({ username })
    console.log(user);
    if (!user) return res.status(400).send('Incorrect Email')
    
    //Checking whether user password matches
    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) return res.status(400).send('Incorrect password!');
    res.send('Success!')

}


module.exports.login_get = async (req, res) => {}

module.exports.login_put = async (req, res) => {}

module.exports.login_delete = async (req, res) => {}