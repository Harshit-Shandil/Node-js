const fs= require('fs');
const path= require('path');
const dirpath= path.join(__dirname);
//const dirpath= path.join(__dirname,'folder/filename');
const filePath=path.join(__dirname, 'apple.txt');

// fs.writeFileSync('apple.txt','This is apple file 2');

// utf8 to avoid buffer
// fs.readFile(filePath,'utf8',(err, data)=>{
//     console.log(data);
// });

fs.appendFile(filePath, 'and file name is apple.txt',(err)=>{
    if(!err){
        console.log("file is updated");
    }
})

// fs.rename .....
// to DELETE ... fs.unlinkSync()