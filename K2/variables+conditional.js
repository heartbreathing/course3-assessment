// We're in strict mode now
"use strict"


// Variables：is a container for a value, for storing the information;
// Keywords(var/let) + variable name;
let message;// Variables declaration

message = 'Hello JS!';//assign value

message = 'Goodbye JS';//can be reassigned value

// Constants ：to declare a constant (unchanging) variable，cannot be reassigned. 

//   VARIABLE NAMES rule:
// Uses good naming conventions :
// ● Use camel case
// ● Use descriptive names for what they contain
// ● Prefix booleans with is or has

let hasScore_;
let getUserName;


// Types of data: 7 primitive + 1 special
let num = 18;// number(integers/floats). 
let name = 'Bob';// string(text/quote). 
let isNumber = false;// Boolean(true/false logical values). 
let age = null;//null means “empty” or “value unknown”.
// undefine: “value is not assigned”.
// BigInt:larger than (9007199254740991) or less than -(9007199254740991)

let random = ['tree', 795, [0, 1, 2]]; // array ( contains multiple values enclosed in square brackets and separated by commas.)

// Object:special type, to store keyed collections of various data and more complex entities.
let user = {       //（“key: value”）key is “property name”, value can be anything.
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };






// CONDITIONALS : If statements
let number = Number(prompt('Pick a number:'));

if (number === 5) {
alert('Correct');
} else if (number < 5) {
alert('Higher');
} else if (number > 5) {
alert('Lower');
}



