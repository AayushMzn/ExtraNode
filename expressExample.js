const express = require('express');
const app = express();
const cors = require("cors");//secuity
const bodyParser =  require("body-parser");
const {login} = require("./calculationHelper"); 
const { request } = require("http");
const httpStatus = require("http-status");
const port = 3080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({ origin:"*"}));
app.set("port", port);

//------------------sum using GET-----------------------
// app.get('/get-hello', (req,res)=>{  
//     const a = req.query.a;
//     const b = req.query.b;
//     const send = parseInt(a)+parseInt(b);
//     console.log(send);
//     res.status(200).send('sum='+send);
// })

//---------------------calculation using post from different function in different file----------------------
// app.post('/', (req,res)=>{
//     const num1 = parseInt(req.body.a);
//     const num2 = parseInt(req.body.b);
//     const val = calculationHelper.sum(num1,num2);
//     const val2 = calculationHelper.diff(num2,num1);
//     res.status(200).send('sum='+val+'\ndifference='+val2);
// })

app.post('/', async(req,res)=>{
    const response = await login(req.body);
    console.log(response);
    res.status(200).send(response);
})

app.listen(port, () => {
    console.log(`Example of ${port}`);
}
)