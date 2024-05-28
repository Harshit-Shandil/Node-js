// Not working 

// const express= require('express');
// const multer= require('multer');

// const app=express();

// const upload=multer({
//     storage:multer.diskStorage({
//         destination:function(req,file,cb) {// cb=callback
//             cb(null,"uploads")
//         },
//         filename:function(req,file,cb){
        
//             cb(null,file.fieldname+"-"+ Date.now()+".jpg")
//         }
//     })

// }).single("user_file");


// app.post("/upload",upload,(req,resp)=>{
//     resp.send("file upload")
// });

// app.listen(5000);


//     **********IMportant
const os=require('os')
//console.log(os.arch()); // architecture : 64 bit 

// console.log(os.freemem());  // give in bytes
// console.log(os.freemem()/(1024*1024)); // MB 
// console.log(os.freemem()/(1024*1024*1024)); // GB

// console.log(os.hostname());
// console.log(os.platform());
console.log(os.userInfo());
