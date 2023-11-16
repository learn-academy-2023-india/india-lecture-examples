// Javascript Loops 11/13/23 India

// can define the conditions of a for loop

// can define the difference between index and value
// can explain the concept of iteration
// can create a basic for loop that returns an expected output
// demonstrates proper use of const, let, and var when creating variables based on an understanding of global and local scope
// can create a for loop that iterates upon an array to return an expected outcome


// iteration: perform an action until a condition is met

// for loop: a counting tool that produces numbers that can be used to represent the index of an array
  // starting condition
  // stopping condition
  // iterator: how to increment

// for(starting condition; stopping condition; iterator) {
//   action to take; code block; executable code
// }

// for(let i = 0; i < 8; i = i + 1) {
//   console.log(i)
// }
// output:
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7

// var dinner = [ "cornbread dressing", "mashed potatoes and gravy", "sweet potato pie", "bone-in ham", "tamales", "baked mac and cheese", "hawaiian rolls", "smoked turkey" ]

// Create a sentence with each value in the array
  // abstracting the value by using bracket notation [] to reference the index 
// for(let i = 0; i < 8; i = i + 1) {
//   console.log(dinner[i])
// }

// output:
  // cornbread dressing
  // mashed potatoes and gravy
  // sweet potato pie
  // bone-in ham
  // tamales
  // baked mac and cheese
  // hawaiian rolls
  // smoked turkey


var dinner = [ "cornbread dressing", "mashed potatoes and gravy", "sweet potato pie", "bone-in ham", "tamales", "baked mac and cheese", "hawaiian rolls", "smoked turkey" ]
// Make a sentence with each value in the array
  // string interpolation `${variable}`
     //start     //stop           // increment
// for(let i = 0; i < dinner.length; i++) {
//   console.log(`I can't wait to eat ${dinner[i]}.`)
// }
// dinner[0]
// dinner[1]

// I can't wait to eat cornbread dressing.
// I can't wait to eat mashed potatoes and gravy.
// I can't wait to eat sweet potato pie.
// I can't wait to eat bone-in ham.
// I can't wait to eat tamales.
// I can't wait to eat baked mac and cheese.
// I can't wait to eat hawaiian rolls.
// I can't wait to eat smoked turkey.


// Make the stopping condition dynamic
  // use .length which will count the amount the values in the array
  // console.log(dinner.length)
// for(let i = 0; i < dinner.length; i = i + 1) {
//   console.log(`At index ${i}: I can't wait to eat ${dinner[i]}.`)
// }

// // Output:
// // I can't wait to eat cornbread dressing.
// // I can't wait to eat mashed potatoes and gravy.
// // I can't wait to eat sweet potato pie.
// // I can't wait to eat bone-in ham.
// // I can't wait to eat tamales.
// // I can't wait to eat baked mac and cheese.
// // I can't wait to eat hawaiian rolls.
// // I can't wait to eat smoked turkey.

// for(let i = 0; i < dinner.length; i = i + 1) {
//   console.log(`At index ${i}: I can't wait to eat ${dinner[i]}.`)
// }
//   console.log(dinner.length)

// Output:
// I can't wait to eat cornbread dressing.
// I can't wait to eat mashed potatoes and gravy.
// I can't wait to eat sweet potato pie.
// I can't wait to eat bone-in ham.
// I can't wait to eat tamales.
// I can't wait to eat baked mac and cheese.
// I can't wait to eat hawaiian rolls.
// I can't wait to eat smoked turkey.



// Loops are really good at counting
// Where do we start counting
// Where do we stop counting
// What is the increment

// if(){
//   code action
// }

// for(){
//   code action
// }


// for(let count = 1; count <= 10; count = count + 1){
//   console.log(count)
//   console.log("this is one iteration")
// }

// 1
// this is one iteration
// 2
// this is one iteration
// 3
// this is one iteration
// 4
// this is one iteration
// 5
// this is one iteration
// 6
// this is one iteration
// 7
// this is one iteration
// 8
// this is one iteration
// 9
// this is one iteration
// 10
// this is one iteration

// let count = 1
// count = count + 1 // 2
// count = count + 1 // 3

// var count = 1
// difference between var and let is scope
// scope is curly braces
// outside of all curly braces - global scope, var
// inside of curly braces - local or lexical scope, let
// scope helps keep your code predictable


// for(let count = 2; count <= 20; count = count + 2){
//   console.log(count)
//   console.log("this is one iteration")
// }

// 2
// this is one iteration
// 4
// this is one iteration
// 6
// this is one iteration
// 8
// this is one iteration
// 10
// this is one iteration
// 12
// this is one iteration
// 14
// this is one iteration
// 16
// this is one iteration
// 18
// this is one iteration
// 20
// this is one iteration


// for(let count = 1; count <= 20; count = count + 2){
//   console.log(count)
//   console.log("this is one iteration")
// }

// 1
// this is one iteration
// 3
// this is one iteration
// 5
// this is one iteration
// 7
// this is one iteration
// 9
// this is one iteration
// 11
// this is one iteration
// 13
// this is one iteration
// 15
// this is one iteration
// 17
// this is one iteration
// 19
// this is one iteration

// variableName++ - shorthand for increment by one
// for(let count = 1; count <= 20; count++){
//   console.log(count)
//   console.log("this is one iteration")
// }


// for(let count = 1; count <= 20; count++){
//   if(count % 2 === 0){
//     console.log(count)
//   } else {
//     console.log("odd")
//   }
// }
// odd
// 2
// odd
// 4
// odd
// 6
// odd
// 8
// odd
// 10
// odd
// 12
// odd
// 14
// odd
// 16
// odd
// 18
// odd
// 20

// for(let count = 1; count <= 20; count++){
//   if(count % 2 === 0){
//     console.log(count)
//   } else {
//     console.log("odd")
//   }
// }

// console.log(count)
// ReferenceError: count is not defined

var myArray = ["hello", "hey", "yo", "hola", "another greeting", "here is another thing"]
// console.log(myArray.toUpperCase())
// --> TypeError: myArray.toUpperCase is not a function
// console.log(myArray.join("").toUpperCase())
// --> HELLOHEYYOHOLA

// console.log(myArray.join("").toUpperCase().split(""))
// myArray - array data type
// console.log(typeof myArray[0])
// --> string
// console.log(myArray[0].toUpperCase())
// --> HELLO
// console.log(myArray[1].toUpperCase())
// --> HEY
// console.log(myArray[2].toUpperCase())
// --> YO
// console.log(myArray[3].toUpperCase())
// --> HOLA

// var myArray = ["hello", "hey", "yo", "hola"] the length is 4
// iterating over an array using a for loop
// for(let index = 0; index < myArray.length; index++){
//   console.log(myArray[index].toUpperCase())
// }

// iteration - doing something over and over until a condition is met

// condition to end the loop that is never going to be false, you will get continuous loop that will eventually lead to a stack overflow
for(let i = 0; i > -5; i++){
  console.log("here I am!")
}
// control + c
// stack overflow - too many requests and not enough time to execute