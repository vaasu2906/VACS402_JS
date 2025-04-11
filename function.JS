// // function in Javascript

// //function declaration without parameter

// function greet(){
//      console.log("Hello JS");


//      }
//      greet(); //function calling

//      //function with parameter
//      /*function calculation(a,b){
//         var c=a+b;
//         console.log(a+b)
//      }
//      calculation(6,7); */
//      //function with default parameter
//      (
//         function calculation(a,b=8){
//         var c=a/b;
//         console.log(c);
//      })(60);

//      //immidiately invoked function expression (iife) Javascript
//      (function calculation(x,y){
//         var z=x/y;
//         //template literals
//         console.log('Result of two number is ${z}');

//      })(20,12);


//     function calculation(){
//         return{
//             add()=>console.log(a+b);
//             mul

//         }
        
//     }
     

//function in javascript

//function declaration without parameter

// function greet(){
//     console.log("Hello js");
// }
// greet(); //function calling 

//function with parameter
/*
function calculation(a,b){
    var c=a+b;
    console.log(a+b);
}
calculation(6,7);
*/

// function with default arguments

// function calculation(a,b=8){
//     var c=a*b;
//     console.log(c);
// }
// calculation(6);

//immediately invoked function expression(iife) in javascript

// (function calculation(x,y){
//     var z=x/y;
//     //template literal
//     console.log('result of two number is ${z}');
// })(20,12);

// function closure
//A closure is a function that  has access to the parent scope,
// after the parent function has closed
function cal(a,b){
   return{
       add:()=>console.log(a+b),
       mul:()=>console.log(a*b)
   };
};
   let res=cal(5,7);
   res.add();
   res.mul();