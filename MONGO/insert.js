const dbConnect= require('./connection')

const insert= async()=>{
    const db= await dbConnect();
    const result= await db.insertOne(
        {
               
            name: 'om',
            age: 28,
            Hobbies: [ 'walk', 'Singing' ],
            identity: { hasPancard: false, hasAdhaarcard: true },
            bio: 'I am a Singer',
            experience:[['Am', 2], ['Pm',3]]
            // check syntax
            // data inserted in the table is to equal
            // no. of times saving the file/running. 
        }
    );
    if(result.acknowledged)
        {
            console.log("data inserted ")
        }
}
insert();
