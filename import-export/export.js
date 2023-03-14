
// 1 single export
/*
const add = (a,b) =>
{
    return a+b;
};

module.exports=add;
*/

/*
// experiment
const add = (a,b) =>
{
    return a+b;
};

var name = 'Pawan';
module.exports=name;
*/

// paas multiple
/*
// --- 1 method
const add = (a,b) =>
{
    return a+b;
};
const sub = (a,b) =>
{
    return a-b;
};
const mul = (a,b) =>
{
    return a*b;
};
module.exports=add;
module.exports=sub;
module.exports=mul;
*/

// 2 way 
/*
const add = (a,b) =>
{
    return a+b;
};
const sub = (a,b) =>
{
    return a-b;
};
const mul = (a,b) =>
{
    return a*b;
};
module.exports.add=add;
module.exports.sub=sub;
module.exports.mul=mul;
*/

// 3 effective 
const add = (a,b) =>
{
    return a+b;
};
const sub = (a,b) =>
{
    return a-b;
};
const mul = (a,b) =>
{
    return a*b;
};

var name= "Pawan";
module.exports = {name,add,sub,mul};
