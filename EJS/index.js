const express= require('express');
const path =require('path');

const app=express();
const publicPath= path.join(__dirname)

app.set('view engine', 'ejs');

app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/profile',(_,resp)=>{
    const user={
        name:'Peter',
        email:'peter@test.com',
        country:'USA',
        skills:['php','c','cpp', 'python']
    }
    resp.render('profile',{user});
});

app.get('/help',(_,resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
})

app.get('*', (_,resp)=>{
    resp.sendFile(`${publicPath}/Nopage.html`)
})
app.listen(5000);
// the main (index page running on 5000 first)
