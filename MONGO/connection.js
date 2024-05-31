// const {MongoClient}=require('mongodb');
// const url ='mongodb://localhost:27017';
// const database='college'
// const client= new MongoClient(url);
// async function getData()
// {
//     let result= await  client.connect();
//     let db= result.db(database);
//     let collection= db.collection('students');
//     let response= await collection.find({}).toArray();
//     console.log(response);
// }
// getData();



//  Configuration file database 



const {MongoClient}=require('mongodb');
const url ='mongodb://localhost:27017';
const database='college'
const client= new MongoClient(url);

async function dbConnect()
{
    let result= await  client.connect();
    let db= result.db(database);
    return db.collection('students');
    
}

module.exports=dbConnect;
