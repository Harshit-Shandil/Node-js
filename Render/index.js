// Rendering html and json

const express=require('express')
const app=express();
app.get('',(req, resp)=>{
    
    resp.send('<h1> Hello, this is home </h1>');
});

app.get('/about', (req,res)=>{
    res.send(`
    <input type="text" placeholder="user name"/>
    <button>click me</button>
    `);
});


app.get("/help", (req,resp)=>{
    resp.send([
        {
            name:'Anil',
            email:'anil@test.com'
        },
        {
            name:'same',
            email:'sam@test.com'
        }

    ]);
})
app.listen(5000);