const express = require('express');
const cors = require('cors');
require('dotenv').config()
const mongoose = require('mongoose');
const router = require('./Router/router')
const app = express();
const PORT = process.env.PORT || 5000;
mongoose.connect(`mongodb+srv://${process.env.AUTH}@cluster0.chn8e.mongodb.net/guide?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, (err, res)=>{ return !err ? app.listen(PORT, ()=> console.log(`SERVER STARTED ON PORT ${PORT}`)) : console.log(`MongoDB error code ${err.code}`); })

app.use(express.json(), cors())
app.use(router)