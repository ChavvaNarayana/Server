const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors')

const connect = require('./src/Connection/connect');
const postRoute = require("./src/Routes/post")

const port = process.env.PORT || 5050;

const app = express();

app.use(fileUpload({
    useTempFiles:true
}))

app.use(cors())
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
app.use("",postRoute);

app.listen(port ,()=>{ console.log(`Server is on 5050`)})