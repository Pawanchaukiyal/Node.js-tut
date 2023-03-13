
// create a module:

const fs = require("fs");

// create a new txt file of module 2
// fs.writeFileSync("2_module.txt","This is a text file ");

// what happen if we do overwrite the file -- without comment of 7 LOC.
// fs.writeFileSync("2_module.txt","This is a text file by what happen if we do overwrite the file without comment of 7 LOC");

// -- overwrite success,
// now first comment 10 loc, then first init, we get some output see in readtxt file
// now comment 7 loc and again do overwrite
fs.writeFileSync("2_module.txt","This is a overwrite text file ");

// now add some text 
fs.appendFileSync("2_module.txt","This is done by append")


// read file 

const buff_data=fs.readFileSync("2_module.txt");

console.log(buff_data);

// convert in string


str =buff_data.toString();
console.log(str);

// rename the file
fs.renameSync("2_module.txt","2_Module.txt");