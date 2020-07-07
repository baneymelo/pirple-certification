/*
var: var is a global variable, I can modify its value from a function or from anywhere statement through of the code. 

let: It is a variable that could also change its value, but it will only live (It will work) in the block where it was declared.

const: It's a variable that never change its value, and if was declareded must has a value defined.


Example:


VAR.

var x = "my value is 5";

function foo(){
  var x = "not my value is 7";
  console.log(x);
}

foo();

//the message will be: "not my value is 7".


LET.

let x = 10;

function foo(){
  let x = "not my value is 7";
  
}

console.log(x);

//the result will be: 10. if x was in function the value will be "not my value is 7";


CONTS.

const x = 10;

function foo(){
  const x = "not my value is 7";
  
}

// Error Message : Uncaught TypeError: Assignment to constant variable



HOISTING.

This characteristic consists in that regardless of where the declaration of a variable is, it is moved to the beginning of the scope to which it belongs.

If I declared the expression like that:

function foo() {
    console.log(x);
    var x=10;
}

The system take it like that:

function foo() {
    var x;
    console.log(x);
    x=10;
}

*/


