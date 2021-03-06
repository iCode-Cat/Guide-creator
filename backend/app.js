const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors');
require('dotenv').config()
const mongoose = require('mongoose');
const router = require('./Router/router')
const app = express();
const PORT = process.env.PORT || 5000;
const Auth = require('./middleware/authMiddleware')
const session = require('express-session');

mongoose.connect(`mongodb+srv://${process.env.AUTH}@cluster0.chn8e.mongodb.net/guide?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, (err, res)=>{ return !err ? app.listen(PORT, ()=> console.log(`SERVER STARTED ON PORT ${PORT}`)) : console.log(`MongoDB error code ${err.code}`); })

app.use(express.json(), cors(), cookieParser(), session({secret:'secret'}))
app.use(router)