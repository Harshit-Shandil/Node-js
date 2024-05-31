/*const mongoose= require('mongoose');


const main= async()=>{
    await mongoose.connect("mongodb://localhost:27017/college")
    const st_schema= new mongoose.Schema({
        name:String
    });

    // const st_model =mongoose.model('students', st_schema);
    // let data= new st_model({name:"Naman", age:20}); // age will not enter into the table 
    // // because only string is passed
    // let result= await data.save();
    // console.log(result)



    // make update function similar.. to mongo and earlier code
    // make delete

    const findindb= async()=>{
        const students= mongoose.model('students',st_schema );
        let data =await students.find({name:"Peter"});
        console.log(data);
    }
    findindb();
    



}
main()*/


// ------------------------ 41 video
const express=require('express');
require('./config');
const student= require('./students');

const app=express();

// app.post("/create", (req,resp)=>{
//     resp.send("done");
// });

app.use(express.json());  // to convert data into json
app.post("/create", async(req,resp)=>{
    let data =new student(req.body)
    let result= await data.save();
    console.log(result);
    resp.send(result);
});


app.get("/list", async(req,resp)=>{
    let data = await student.find();
    resp.send(data);
})


app.delete("/delete/:_id",async(req,resp)=>{
    console.log(req.params);
    let data=await student.deleteOne(req.params);
    resp.send(data);
})



app.put("/update/:_id", async(req,resp)=>{
    console.log(req.params)
    let data =await student.updateOne(
        req.params,
        {
            $set:req.body
        }
    );
    resp.send(data);
})



// search
app.listen(5000);
