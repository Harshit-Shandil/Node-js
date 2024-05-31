const express= require('express');
const dbConnect= require('./connection');
const mongodb=require('mongodb')

const app= express();
app.use(express.json());

app.get('/',async (req,resp)=>{
    let data= await dbConnect();
    data= await data.find().toArray();
    console.log(data);
    // resp.send({name:'Anil'})
    resp.send(data);

});


app.post('/',async(req,resp)=>{
    // console.log(req.body );
    // resp.send({name:'Anil'});

    let data= await dbConnect();
    let result= await data.insertOne(req.body);// getting data from postman or .. to mongo..
    resp.send(req.body);
})

app.put('/', async(req, resp)=>{
    let data = await dbConnect();
    let result= data.updateOne(
        {name: req.body.name},
        {$set:req.body}
    )
    resp.send({result:"update"})
})
// to change name put('/:name')  <--------------| same
// and change line to {name: req.params.name}, <-
// put that name in URL which is to be changed



app.delete("/:id", async(req,resp)=>{
    console.log(req.params.id)
    const data=await dbConnect();
    const result= await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    resp.send(result);
    
    //resp.send("done");
})


app.listen(5000);