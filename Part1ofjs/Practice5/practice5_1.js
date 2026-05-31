/*



// Function Declaration

function a (){

}



// Function Expression
var b = function (){

}



// Arrow Function
var c = () => {

}



// Function with parameters & Arguments
function add1 (v1, v2){
    console.log(v1 + v2);
}
add1(10, 20); // Arguments



// Default, rest and spread parameters

function add2 (v1 = 0, v2 = 0){
    console.log(v1 + v2);
}
add2(); // Uses default values

function numbers (...nums){
    console.log(nums);
}
numbers(1, 2, 3, 4); // Rest parameters




// Return values and early return
function d (v){
    return 12 + v;
}
let value1 = d(23);
console.log(value1); // 35



// First-class functions (assigning functions to variables, passing them as arguments, returning them from other functions)
function e (value2){
    return value2();
}

e(function(){
    console.log("Hello from a function passed as an argument!");
});




// Higher order functions

function f() {
    return function() {
        console.log("Hello from a function returned by another function!");
    };
}
f()(); // Calls the returned function


function g(value3) {

}
g(function() {
    console.log("Hello from a function passed as an argument to a higher-order function!");
});




// Pure And Impure Functions
let x = 12;
 function pureFunction() {
    console.log(`pure function`);
 }
 function impureFunction() {
    x++;
    console.log(`impure function: ${x}`);
 }
pureFunction(); // pure function
impureFunction(); // impure function




// Closures and Lexical Scope
function h() {
    let y = 10;
    return function() {
        console.log(`Closure accessing y: ${y}`);
    };
}
h()(); // Closure accessing y: 10

function i() {
    let w = 5;
    function j() {
        let z = 15;
        function k() {
            let m = 20;
        }
    }
}




// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("This is an IIFE!");
})();




//Hoisting Difference between function declaration and function expression
l(); // Works due to hoisting
s(); // Error
function l() {
    console.log("Function declaration hoisted!");
}

let s = function() {
    console.log("Function expression not hoisted!");
}





*/