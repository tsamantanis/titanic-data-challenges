

// These functions take callbacks.
// Use an arrow function for the callback. 

// Here are some built in functions that use callbacks

// The setTimeout function takes a callback. I've used a 
// regular function you should change it to an arrow function

setTimeout(function() {
	console.log('Example 1 - one second later')
}, 1000)


// A Callback is a function you pass as a parameter to 
// a function. These appear everywhere in javascript

const numbers = [1,2,4,5,7,88,9,2,4,7,99,22,33,4,56,25]

// Using forEach() often you'll have a loop and want to 
// iterate over each element in the loop.

// Use forEach like this: numbers.forEach(() => {})
// Here we passed a callback into forEach and forEach
// executes the callback once for each item in the array
// passing one value from the array each iteration

numbers.forEach((n) => {
	// This function is the callback
	// n is a value from the numbers array
	console.log(n)
})

// TODO: Use foreach to double each number in the numbers array
// print the new value to the console. 


// TODO: Use forEach to print only the even numbers to the console
// You know a number is even if n % 2 === 0


// The forEach method calls the provided function with the following
// parameters: item, index, array. 
// Read the documentation here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// TODO: Use the index. Multiply each value by it's index in the array and 
// print the value to the console


// https://javascript.info/callbacks
// https://javascript.info/array-methods#iterate-foreach


console.log('1 ------------------------------')
// A regular function 
function world() {
  console.log('World')
}

world() // invoke this function


console.log('2 ------------------------------')
// An arrow function
const hello = () => {
  console.log('Hello')
}

hello()

console.log('3 ------------------------------')
// Parameters go in the ()
const foo = (x, y) => {
  console.log(x * y)
}

foo(4, 3)


console.log('4 ------------------------------')
// If the function is on a single line the 
// {} can be omitted
const bar = (x, y) => console.log(x / y)

bar(3, 4)


console.log('5 ------------------------------')
// If there is only a single parameter the 
// () can be omitted
const func = x => x * 2 // Value is returned!

console.log(func(3)) // -> 6


console.log('6 ------------------------------')
// If there are no parameters you need to inlcude
// () or a _
const pi = () => 3.14

console.log(pi()) // -> 3.14



// Callbacks - 
// Arrow functions work best for Callbacks

// Here are a few examples

console.log('7 ------------------------------')
// Set time out takes a callback it will 
// execute in the future. 
setTimeout(() => console.log('1 sec later (8)'), 1000)

// Notice the arrow function used here! 


console.log('8 ------------------------------')
// Array forEach takes a function and executes 
// it once for each item in an Array
const arr = [11, 22, 33, 44]
arr.forEach((item) => console.log(item * 3))

// forEach takes a function as a parameter: 

//  arr.forEach( (param) => {} )

// This callback function 
// takes a parameter that is assigned an 
// element from the array. 

// Foreach expects you to provide a function 
// and that the function you provide will 
// accept a parameter. 

console.log('9 ------------------------------')
// forEach has a couple optional parameters
const numbers = [11, 22, 33, 44]
numbers.forEach((item, index, arr) => {
  // Use the index if needed
  console.log(item * index)
})

// Foreach also provides the index and array, 
// these are optional.


// A callback is a function that you provide 
// to another function. How the function uses 
// the callback will determine the parameters 
// that the callback will need to define. 


console.log('**********************************************')

// Challenges: arrow functions and callbacks
// Use arrow functions for all of the challenges 
// below.


// ***********************************************
// Define an arrow function that prints your name



/* ***********************************************
Define a function named greet that prints
Hello <name> where `name` is a parameter
*/




/* ***********************************************
Define an arrow functon that takes two parameters 
the first is a name and second a prefix combine 
these to print: Good morning <prefix> <name>
for example: Good morning Mr. Mustard
*/





/* ***********************************************
If you haven't already rewrite the functions above
on a single line
*/



/* ***********************************************
Use setTimeout to print "Warning!" in 2200 ms. 
setTimeout takes two parameter: 
setTimeout(callback, ms) 
Replace callback with a function that prints the 
message, and ms with 2200. 
*/




/* ***********************************************
For each of the names in the array below print
them to the console. use Array.forEach()
The callback in foreach receives a parameter that 
is an item from the array. In this case a name.
*/
const names = ['Andy', 'Boba', 'Kris', 'Dana']




/* ***********************************************
forEach provides a second parameter to it's
callback that is the index. Print each name from
from the array preceded by it's index + 1.
1) Andy
2) Boba
3) Kris
4) Dana
*/






/* ************************************************
Conbine the greet function you wrote above with forEach
The idea is to use the greet function as the callback
in forEach.
*/





/* ************************************************
Use forEach and setTimeout to print each name as a
greeting with a delay of 1200 ms between each greeting.
*/




