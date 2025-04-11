//Anonymous function

//basic or normal fn
/*function demo(){
demo(); */
//another way to declare the fn
/*let demo=function(){
}
demo();*/
//another way using arrow function

// let demo=()= >{
// }
// demo();


// //arrow function -single line statement

// let demo=()=>{ console.log("hello JS");}
// demo()

// //arrow function-multi line statement
// let demo=(a,b)=>{
//     let c=a+b;
//     console.log("Addition of two number is ${c} ");
//     let d="<h1> thanks to visit us!</h1>"
//     console.log('${d}');
// }
// demo(3,5);

// //call back function
// let display=function(){
//     console.log("hello java script");
// }
// // passing as an argument so display func is a callback func
// setTimeout(display,2000);

// wap to get the addition of prime numbers and display after 3 seconds

function isprime(num){
    if(num<1){
        return false;
    }
    for(let i=0;i*i==num;i++){
        if(num%i==0){
            return false;

        }
        return true;
    }
}
function sum(num){
    let sum=0;
    for(let i=2;i<=num;i++){
        if(isprime(i)){
            sum+=i;
        }
    }
    return sum;
}
