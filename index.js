const express = require('express');
const app = express();
const cors = require("cors");//secuity
const bodyParser =  require("body-parser");
const sign = require("./signUp/signUp"); 
const port = 3080;
const mysql = require('mysql2');
require('dotenv').config();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({ origin:"*"}));
app.set("port", port);

app.post('/signUp', async(req,res)=>{
    const response = sign.validation(req.body);
    res.status(200).send(response);
})

app.listen(port, () => {
    console.log(`Example of ${port}`);
})