const express = require('express');
const app = express();
const cors = require("cors");//secuity
const bodyParser =  require("body-parser");
const sign = require("./signUp/signUp"); 
const port = 3080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({ origin:"*"}));
app.set("port", port);

app.post('/signUp', async(req,res)=>{
    const user=req.body.user;
    const email=req.body.email;
    const pass=req.body.pass;
    const response = sign.validation(user,email, pass);
    res.status(200).send(response);
})

app.listen(port, () => {
    console.log(`Example of ${port}`);
})