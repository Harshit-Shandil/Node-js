const dbConnect= require('./connection')

const deletedata=async()=>{
    let data= await dbConnect();
    let result= await data.deleteOne({name:'Om'})
    console.warn(result);
}
deletedata();