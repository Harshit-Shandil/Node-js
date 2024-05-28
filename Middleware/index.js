// const express= require('express');
// const app =express();

// const reqFilter=(req,resp,next)=>{
//     if(!req.query.age){
//         resp.send("Please provide your age")

//     }
//     else if(req.query.age<18){
//         resp.send("You are under aged")

//     }
//     else{
//         next();
//     }

// }
// app.use(reqFilter);

// app.get('/', (req,resp)=>{
//     resp.send('Welcome to home page')
// })

// app.get('/users', (req,resp)=>{
//     resp.send('WElcome to user page')
// })

// app.listen(5000);


// +++++++++++-------++++++++++++
// Route middleware

// const express= require('express');
// const app =express();

// const reqFilter=(req,resp,next)=>{
//     if(!req.query.age){
//         resp.send("Please provide your age")

//     }
//     else if(req.query.age<18){
//         resp.send("You are under aged")

//     }
//     else{
//         next();
//     }

// }
// // app.use(reqFilter);

// app.get('/', (req,resp)=>{
//     resp.send('Welcome to home page')
// })

// app.get('/users', reqFilter,(req,resp)=>{
//     resp.send('WElcome to user page')
// })

// app.get('/about',(req,resp)=>{
//     resp.send('WElcome to user page')
// })

// app.listen(5000);




// below code to understand with middleware.js file

const express= require('express');
const reqFilter=require('./middleware')
const app =express();
const route=express.Router();

route.use(reqFilter);
app.get('/', (req,resp)=>{
    resp.send('Welcome to home page')
})

app.get('/users', reqFilter,(req,resp)=>{
    resp.send('WElcome to user page')
})

route.get('/about',(req,resp)=>{
    resp.send('WElcome to user page')
})

route.get('/contact', (req,resp)=>{
    resp.send('Contact me')
})

app.use('/',route)
app.listen(5000);