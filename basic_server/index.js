const https=require('http');


function dataControl(req,resp)
{
    resp.write("<h1> Hello js resp <h1>");
    resp.end();
}

https.createServer(dataControl).listen(4500);

// or

// https.createServer((req,resp)=>{
//     resp.write("<h1>Hello js <h1>")
//     resp.end();
// }).listen(4500);


// arrow function, http take request, response
// function as parameter