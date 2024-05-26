
// Global= console,  
// Non global= fs(file system, htpp ...) jo import krne pdte hai

const fs =require('fs');
console.log("hello");
fs.writeFileSync("hello.txt","first file" );