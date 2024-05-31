const dbConnect =require('./connection')
const updateData= async()=>{
    let data= await dbConnect();
    let result= await data.updateMany(
        {name:'om'},{
            $set:{name:'Om'}
        }
    
    );
    console.warn(result)
}
updateData();