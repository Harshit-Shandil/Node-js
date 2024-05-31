
const dbConnect=require('./connection.js')

// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.warn(data)
//     })
    
// })

  
//or


const main= async()=>{
   let data =await dbConnect();
   data= await data.find().toArray();
   console.warn(data);
}
main();