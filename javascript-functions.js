// JavaScript Functions 11/16/2023

// allow us to decide when our code will run
// reuse code

// functions run code and produce an output

// encapsulation - control over what code enters the scope and what code is available in the scope, all the working parts of the machine to live inside the machine

// anatomy of a function

// arrow function - one style of function, the best practice for the stack we use at LEARN

// declaration - always const, never want it to be reassigned
// const

// name - communicate intent, camelCase
// const lunchOrder

// assignment operator
// const lunchOrder = 

// parentheses - action, behavior
// const lunchOrder = ()

// arrow syntax - the syntax that indicated we are writing a function
// const lunchOrder = () =>

// curly braces - code block, code action happen, also defines scope
// const lunchOrder = () => {

// }

// the function's job is produce an output
// const lunchOrder = () => {
//   "lunch is ready"
// }

// functions don't do anything until we tell them to

// invoking a function, function invocation
// lunchOrder()
// log the invocation
// console.log(lunchOrder())
// --> undefined - primitive data type

// var myVariable
// console.log(myVariable)
// --> undefined - there is a variable that doesn't have a value

// function's job is to produce an output we have to specify the output
// specify the output with the keyword return
// const lunchOrder = () => {
//   return "lunch is ready"
// }
// console.log(lunchOrder())
// --> lunch is ready

// console.log(lunchOrder())
// console.log(lunchOrder())
// console.log(lunchOrder())
// console.log(lunchOrder())
// console.log(lunchOrder())

// meal is now a variable that is defined and available inside the function
// parameter - the variable that belongs to a function (meal)
// const lunchOrder = (meal) => {   // meal = "turkey sandwich"
//   return `${meal} is ready`
// }
// console.log(lunchOrder())
// --> undefined is ready

// argument - value that gets assigned to the parameter ("turkey sandwich")
// console.log(lunchOrder("turkey sandwich"))
// --> turkey sandwich is ready

// console.log(lunchOrder("veggie soup"))
// --> veggie soup is ready

// console.log(meal)
// --> ReferenceError: meal is not defined

// menu:

// options each have small, large

// turkey sub
// ham sub
// pizza
// fried egg
// avocado

// parameters for meal and size
// const lunchOrder = (meal, size) => { 
//   // string interpolation `${}`
//   return `You ordered a ${size} ${meal}.`
// }
// console.log(lunchOrder("turkey sub", "small"))
// --> You ordered a small turkey sub.

// var lunchOptions = ["turkey sub", "ham sub", "pizza", "fried egg", "avocado"]

// console.log(lunchOrder(lunchOptions[1], "large"))
// --> You ordered a large ham sub.


// all small items are $5 and all large items are $10

// pseudo coding - writing out what your code needs to do
// function inputs - meal and the size
// function output - receipt that has the meal, the size, and the price

// if the order is size small the receipt should have the meal, size and $5
// if the order is size large the receipt should have the meal, size, and $10


// const lunchOrder = (meal, size) => { 
//   if(size === "small"){
//     return `You ordered a ${size} ${meal} for $5.`
//   } else if(size === "large"){
//     return `You ordered a ${size} ${meal} for $10.`
//   } else {
//     return "something went wrong, try again"
//   }
// }

// var lunchOptions = ["turkey sub", "ham sub", "pizza", "fried egg", "avocado"]

// console.log(lunchOrder(lunchOptions[1], "large"))
// --> without returns: undefined
// --> Correct: You ordered a large ham sub for $10.
// --> without interpolation: You ordered a ${size} ${meal} for $10.

// console.log(lunchOrder(lunchOptions[3], "small"))
// --> You ordered a small fried egg for $5.


const lunchOrder = (meal, size) => { 
  console.log(size.toLowerCase())
  if(size.toLowerCase() === "small"){
    return `You ordered a ${size} ${meal} for $5.`
  } else if(size.toLowerCase() === "large"){
    return `You ordered a ${size} ${meal} for $10.`
  } else {
    return "something went wrong, try again"
  }
}

var lunchOptions = ["turkey sub", "ham sub", "pizza", "fried egg", "avocado"]
// console.log(lunchOrder(lunchOptions[3], "Small"))
// --> something went wrong, try again



// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".

// input: singular noun - string, number - total of two inputs
// output: string with the number and the appropriate noun 
// if the number is 2 or more - nouns will be pluralized by adding s
// if the number is 1 - return the noun as is

const pluralizer = (noun, number) => {
  if(number === 1){
    return `there is ${number} ${noun}`
  } else if(noun === "person") {
    return `there are ${number} people`
  } else if(number > 1){
    return `there are ${number} ${noun}s`
  }
}
console.log(pluralizer("cat", 1))
console.log(pluralizer("dog", 2))
console.log(pluralizer("person", 2))