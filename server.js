const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const Routers = require('./routers')

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/hotel_management',{useNewUrlParser:true ,useUnifiedTopology:true}).then(
    ()=>{
        console.log("db connected")
    }
).catch(
    (errors)=>{
        console.log(errors)
        console.log("db not connected")
        process.exit();
    }
)
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true, limits: "100mb" }));
app.use(bodyParser.json({limits:true}))
app.use('/api',Routers)
const port = 8000;
 app.listen(port,(
     ()=>{
         console.log('your server running at port 8000')
     }
 ))
