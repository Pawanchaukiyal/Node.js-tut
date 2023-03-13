
// welcome to asynchronous

const fs = require("fs"); // call or use the fs module by the help of require

/*
// it not work in async
fs.writeFile('3_asy.txt',"Create this file");  
*/


// path,data,callback--err as argument in parameter
fs.writeFile("3_asy.txt","Create this file",(err)=>
{
    console.log("This time file is create");
    // let see what the error is
    console.log(err);
});

// append

fs.appendFile("3_asy.txt","Append the file",(err)=>
{
    console.log("Append is done in async");
    // let see what the error is
    console.log(err);
});

// show in buffer 

// fs.readFile("3_asy.txt",(err,data)=>{
//     console.log(data);
// });

// in txt use utf-8

fs.readFile("3_asy.txt",'UTF-8',(err,data)=>{
    console.log(data);
});