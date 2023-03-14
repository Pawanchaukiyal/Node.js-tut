// 
/*
//1. single passed
const add = require('./export');
result = add(5,8);

console.log(`The sum is : ${result}`);
*/

// experiment ...
/*
// here i paas name in add 

const add = require('./export');
// result = add(5,8);

//console.log(`The sum is : ${result}`);
console.log(add);
*/

// paas multiple
/*
// --- 1 method 
const add = require('./export');
const sub = require('./export');
const mul = require('./export');

console.log(add(2,2));
console.log(sub(5,2));
console.log(mul(2,5));
*/

// 2 way 
/*
const oper = require('./export');
console.log(oper);
console.log(add(2,2));
console.log(sub(5,2));
console.log(mul(2,5));
*/

// 3 effective way

const {add,sub,mul,name} = require('./export');

console.log(add(2,2));
console.log(sub(5,2));
console.log(name);
console.log(mul(2,5));