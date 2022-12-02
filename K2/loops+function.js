"use strict"

// Loops: while/for.  (break/continue)

while(true) {
    let answer = prompt("What's your answer?");
    if(answer === "loop-the-loops") {
    break;
    }
}

let loops = Number(prompt("Pick a number:"));
for(let i = 0; i < loops; count++) {
   alert(count);
}


// Functions:are reusable sets of code
function showMessage() {   //declaration
    alert('Hello');
    }
    showMessage();  //calling

//tons of BUILT-IN FUNCTIONS like alert(), prompt().

// FUNCTIONS Scope: Local variables, Outer variables, Global variables
// Local variables:variables within a function can't be accessed outside of it.
function showMessage() {

    let firstName = 'Bob';  

    alert(`Hello ${firstName}`);
    }
    showMessage();
    alert(firstName);//error

// Outer variables，Code inside functions can access variables outside of it.
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}
showMessage(); // Hello, John

// Global variables:declared outside of any function,

//  the variable with the same name inside a function will be shadowed.
let firstName = 'Bob';
function showMessage() {
let firstName = 'Chili';
alert(`Hello ${firstName}`);
}
showMessage();
alert(firstName);// Bob

// FUNCTIONS can modify variables outside of it
let lastName = 'Bush';
function showMessage() {
lastName = 'Jordan';
alert(`Hello ${lastName}`);
}
showMessage();
alert(lastName);//Jordan


// use function through taking parameters
function sum(a, b) {
    alert(a + b);
    }
let result = sum(5, 10);
alert(result);  



// can pass functions around as values

let showMessage = function() {
    alert('Hello');
    }
function loop(n, callback) {
    for(let i = 0; i < n; i++) {
    callback();
    }
}
loop(5, showMessage);
// FUNCTIONS-Uses good naming conventions :
// ● Use camel case
// ● Use descriptive names, usually verbs in imperative form
// ● Common prefixes are get, make, render, show etc.