db.createCollection("nonfiction",{
    validator:{
        $jsonSchema:{
            required:['name','price'],
            properties:{
                name:{
                    bsonType:'string',
                    description:'must be a string and'
                },
                price:{
                    bsonType:'number',
                    description:'must be a number and required'
                }
            }
        }
    },
    validationAction:'error'
})

// copy above and paste on mongo shell

// db.students.insertOne({
//     name: 'Samu',
//     age: 25,
//     Hobbies: ['walk', 'cricket'],
//     identity: {
//         hasPancard: false,
//         hasAdhaarcard: true
//     },
//     bio: 'I am a youtuber',
//     experience: [
//         { company: 'spotify', duration: 3 },
//         { company: 'paytm', duration: 1 }
//     ]
// })

db.students.insertOne({
    name: 'Hari',
    age: 26,
    Hobbies: ['walk', 'cricket'],
    identity: {
        hasPancard: false,
        hasAdhaarcard: true
    },
    bio: 'I am a cook',
    experience: [
        { company: 'Times Internet', duration: 2 },
        { company: 'Apple', duration: 1 }
    ]
})

