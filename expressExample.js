const express = require('express')
const app = express();
const cors = require("cors");
const bodyParser =  require("body-parser");
const port = 3080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({ origin:"*"}));
app.set("port", port);
// app.get('/get-hello', (req,res)=>{
    
//     const a = req.query.a;
//     const b = req.query.b;
//     const send = parseInt(a)+parseInt(b);
//     console.log(send)
    
//     res.status(200).send('sum='+send)
// })

app.post('/', (req,res)=>{
    const num1 = req.body.a;
    const num2 = req.body.b;
    const val=sum(num1,num2);
    res.status(200).send('sum='+val)
})

function sum(a,b){
    const s1 = parseInt(a);
    const s2 = parseInt(b);
    return(s1+s2);
}

app.listen(port, () => {
    console.log(`Example of ${port}`)
}
)