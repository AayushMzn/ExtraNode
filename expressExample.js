const express = require('express')
const app = express();
const port = 3080;

// app.get('/get-hello', (req,res)=>{
    
//     const a = req.query.a;
//     const b = req.query.b;
//     const send = parseInt(a)+parseInt(b);
//     console.log(send)
    
//     res.status(200).send('sum='+send)
// })

app.post('/', (req,res)=>{

})


app.listen(port, () => {
    console.log(`Example of ${port}`)
}
)