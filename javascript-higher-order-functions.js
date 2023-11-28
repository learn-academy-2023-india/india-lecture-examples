// JavaScript Higher Order Functions 11/27/2023

// built in methods - behavior, designed for a specific data type

// arguments - extra information being added to an action (built in method or a function that we define)

// parameter - placeholder for the argument

// iteration - performing an action over and over until a condition is met
// counting, repeat, every, every other, each, with

// iterations - for loops, for loops are really good at counting
// for loops are not good at storing data

// other ways to iterate
// subset of built in methods called higher-order functions
// only work on arrays

// var myArray = [4, 5, 6, 7, 8]
// console.log(myArray)

// console.log(myArray[0])
// multiply all the numbers by two

// started with an array and ended with an array that has been modified
// var myArrayTimesTwo = []
// for(let i = 0; i < myArray.length; i++){
//   myArrayTimesTwo.push(myArray[i] * 2)
// }
// console.log(myArrayTimesTwo)
// --> [ 8, 10, 12, 14, 16 ]

var myArray = [4, 5, 6, 7, 8]
// map is an iterator, acts on arrays
// map takes an argument
// map takes an argument that is a function
// higher order function is a built in method that takes a function as an argument
// var myArrayTimesTwo = myArray.map(value => {
//   return value * 2
// })
// console.log(myArrayTimesTwo)
// --> [ 8, 10, 12, 14, 16 ]

var greetings = ["hello", "hi", "yo"]

// return an array with all the characters in the strings in uppercase letters
// each

// var yellingGreetings = greetings.map(word => {
//   return word.toUpperCase()
// })
// console.log(yellingGreetings)
// --> [ 'HELLO', 'HI', 'YO' ]
// console.log(greetings)
// --> [ 'hello', 'hi', 'yo' ]

// start with an array of strings and return the word "odd" at every odd index of the array
// var myArrayOfString = ["hello", "hey", "india", "LEARN", "hola!"]
// --> ["hello", "odd", "india", "odd", "hola!"]
// the odd indexes 
// modulo operator

// var oddIndexes = myArrayOfString.map((value, index) => {
//   if(index % 2 !== 0){
//     return "odd"
//   } else {
//     return value
//   }
// })
// console.log(oddIndexes)
// --> [ 'hello', 'odd', 'india', 'odd', 'hola!' ]



// start with an array of strings and return only the values at the even index

var myArrayOfString = ["hello", "hey", "india", "LEARN", "hola!"]
// --> ["hello", "india", "hola!"]
// map will always return an array the same length as the starting array

// var oddIndexes = myArrayOfString.map((value, index) => {
//   if(index % 2 === 0){
//     return value
//   }
// })
// console.log(oddIndexes)
// --> [ 'hello', undefined, 'india', undefined, 'hola!' ]

// filter - higher order function, acts on arrays, returns arrays
// make a decision about each item in the array - built in conditional statement
// returning a subset of the original array

// var oddIndexes = myArrayOfString.filter((value, index) => {
//   return index % 2 === 0
// })
// console.log(oddIndexes)
// --> [ 'hello', 'india', 'hola!' ]


// create a function that takes in an array of numbers and returns the numbers cubed (power of 3)
// input: one array of numbers
// output: one array of numbers
// doing something to every item in the array - iteration, map
// cubed ** 3

// const cuber = (array) => {
//   return array.map(number => {
//     return number ** 3
//   })
// }
// console.log(cuber([4, 5, 6, 7]))
// --> [ 64, 125, 216, 343 ]
// console.log(cuber([9, 10, 11, 12, 13, 14, 15]))
// --> [ 729, 1000, 1331, 1728, 2197, 2744, 3375 ]

// create a function that takes in an array of many data types and returns an array with only strings
// input: one array of mixed data types
// output: one array of strings
// make a decision about every item in the array, filter
// typeof "string"

// const onlyStrings = (array) => {
//   return array.filter(value => {
//     return typeof value === "string"
//   })
// }
// console.log(onlyStrings([true, 4, 5, false, "hello", "yo", null]))
// // --> [ 'hello', 'yo' ]

// var mixedData = [7, "hola", null, true, undefined, "yo!"]
// console.log(onlyStrings(mixedData))
// --> [ 'hola', 'yo!' ]



// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// output: "nicework"

// input: one array of all data types
// output: string
// making a decision about every item in the array - filter
// determine if the value is a string
// go from array to string

// const lettersOnly = (array) => {
//   let onlyStringsArray = array.filter(value => {
//     console.log(typeof value)
//     return typeof value === "string"
//   })
//   return onlyStringsArray.join("")
// }
// console.log(lettersOnly(comboArr))
// --> [ 'n', 'i', 'c', 'e', 'w', 'o', 'r', 'k']
// --> nicework

const lettersOnly = (array) => {
  return array.filter(value => {
    return typeof value === "string"
  }).join("").toUpperCase()
}
console.log(lettersOnly(comboArr))
// --> nicework
// --> NICEWORK