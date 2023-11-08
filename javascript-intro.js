// JavaScript Intro 11/8/2023

// command + /

// git checkout -b intro 
// touch javascript-intro.js

// JavaScript - dynamic, interpreted, scripting language
// dynamically typed - variables can hold any data type and you can change the data type at any time
// interpreted - read line by line
// scripting language - data and behavior, no UI only logic

// data types - the fundamentals of the language
// primitive data types and collection data types
// primitive - cannot can be broken down any further
// six primitive data types

// inspect - control click or right click on the browser

// strings - defined by quotation marks, collection of characters
"hello world!"
"7"
// console.log("hello world!")
// --> hello world!
// console.log(hello world)
// --> SyntaxError

// numbers - math, compare values, whole numbers and floats

// node javascript-intro.js
// node is a JavaScript runtime

5
3.14
// console.log() - prints content in the terminal
// console.log(5)
// --> 5
// console.log(3.14)
// --> 3.14
// console.log(4 + 5) 
// --> addition 9
// console.log(4 - 2)
// --> subtraction 2
// console.log(4 * 3)
// --> multiply 12
// console.log(4 / 2)
// --> divide 2
// console.log(4 ** 2)
// --> exponents 16
// console.log(5 % 3)
// --> modulo - returns a whole number remainder from a division problem 2

// boolean - true and false
// console.log(true)
// --> true
// console.log(false)
// --> false

// undefined - value of a variable that doesn't have data assigned to it

// null - equal to nothing else
// console.log(null)
// --> null

// symbol - unique identifier

// variables - named storage for data

// 1. declaration - var, let, const
// var - global scope, variable wil be available to the entire program
// let - local scope, only available inside a specific code action
// const - cannot be redefined

// 2. name - camelCase casing convention for JavaScript, communicate intent

// hello
// iAmWritingInCamelCaseToYouAll

// 3. assignment operator = 

// 4. data type, value

// var helloIndiaCohort = "Hello India Cohort!"

// console.log(helloIndiaCohort)
// --> Hello India Cohort!
// console.log(helloIndiaCohort + 10)
// --> Hello India Cohort!10

// var myNumber = 9
// console.log(myNumber)
// --> 9
// console.log(myNumber + 10)
// --> 19

// var myString = hello
// console.log(myString)
// --> ReferenceError: hello is not defined


// var helloIndiaCohort = "Hello India Cohort!"
// console.log(helloIndiaCohort.length)
// --> 19

// var helloIndiaCohort = "Hello     India     Cohort!"
// console.log(helloIndiaCohort.length)
// --> 27

// console.log(7777.length)
// --> SyntaxError

// console.log(helloIndiaCohort)

// index - every character in a string has a particular placement, each character has an address, zero-indexed
// 

// var helloIndiaCohort = "Hello India Cohort!"

// console.log(helloIndiaCohort[0])
// --> H

// console.log(helloIndiaCohort[1])
// --> e

// console.log(helloIndiaCohort[5])
// the value at the fifth index is a space

var greeting = 'I said, "hello"'
// console.log(greeting)
// --> I said, "hello"

// built in methods - actions that are added to the language to improve developer experience

var helloIndiaCohort = "Hello India Cohort!"

// .toUpperCase() - change the casing of a string
// () - indicate action, or a behavior being performed
// console.log(helloIndiaCohort.toUpperCase())
// --> HELLO INDIA COHORT!

// console.log(helloIndiaCohort.toLowerCase())
// --> hello india cohort!

// passing an argument - adding more info inside the parentheses, in this case the "I"
// console.log(helloIndiaCohort.indexOf("I"))
// --> 6

// slice is taking two arguments
console.log(helloIndiaCohort.slice(6, 11))
// --> India