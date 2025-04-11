// normal function
function first(){
    console.log("Print First");
}
function second(){
    console.log("print second");
}
function third(){
    console.log("print third");
}
first();
second();
third();

// normal function 
function display(res){
    console.log(`Addition is ${res}`);
}
function calculation(a,b){
    return a+b;
}
let res=calculation(2,3);
display(res);

// usiing calling fucntion display by function caculation
function calc(a,b){
    display(a+b);
}
calc(9,4);

// just to prevent the function calling of diplay inside the calculaton fn even not to call two function to diplay the resutl
function print(res){
    console.log(`Addition of two number is ${res}`);
}
function calcu(a,b,cb){
    let sum=a+b;
    cb(sum);
}
calcu(4,5,print);

//using callback function
first();
setTimeout(function second(){
    console.log("Hello Second");
},200);
third();