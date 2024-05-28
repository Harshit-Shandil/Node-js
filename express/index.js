const express=require('express')
const app=express();
app.get('',(req, resp)=>{
    console.log("data sent by browser=>> ", req.query.name);
    resp.send('Hello, this is home');
});

app.get('/about', (req,res)=>{
    res.send('Hello, this is about');
});

app.listen(5000);