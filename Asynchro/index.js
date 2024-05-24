// console.log("start exe..");

// setTimeout(()=>{
//     console .log("logic exe..");
// },2000)                    // 2 sec delay

// console.log("complete exe...");


// handling asynchron...
let a=20;
let b=0;
let waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },2000)
})

waitingData.then((data)=>{
    b=data;
    console.log(a+b);
})