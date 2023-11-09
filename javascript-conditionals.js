// JavaScript Conditionals

// conditionals, decision trees, if/else statements
// boolean - primitive data type, true false
// node javascript-conditionals.js

// console.log(true)
// console.log(false)

// relational operators - less than, greater than, less than or equal to, and greater than or equal to
// relational operator will return an boolean value
// numbers - primitive data types, math, comparisons

7 > 4
6 < 9
8 <= 7
9 >= 3

// console.log(7 > 4)
// --> true
// console.log(5 < 2)
// --> false

// equality operators - do the two things on either side of the equation equate to being the same ===
// return a boolean value

6 === 3 + 3
// console.log(6 === 3 + 3)
// --> true
// console.log('hi' === 'HI')
// --> false
// console.log('hi'.toUpperCase() === 'HI')
// --> true
var cohort = 'india'
// console.log(cohort === 'india')
// --> true

// console.log(6 === '6')
// --> false

// bad practice! 
// type coercion 
// console.log(6 == '6')
// --> true

// console.log(6 === parseInt('6'))
// --> true

// logical operators - chain together multiple decisions
// && - logical AND - all decisions must be true
// || - logical OR - at least one statement must be true

// console.log('hi'.toUpperCase() === 'HI' && 9 >= 3)
// both decisions are true so the whole statement is true
// --> true

// console.log('hi'.toUpperCase() === 'HI' && 9 <= 3)
// one decision is false so the whole statement is false
// --> false

// console.log(7 === 7 || 'hi' === 'hi')
// --> true

// console.log(7 === 7 || 'hi' === 'HI')
// --> true

// Negation - create the logical opposite, ! bang operator

// console.log(!true)
// --> false

// console.log(7 !== 7)
// --> false

// console.log(7 !== 6)
// --> true


// conditional statements
// if is a protected word that is built into the JavaScript language
// if is followed by parentheses
// parentheses are action, perform behavior
// curly braces - executable code actions

// if()

// if(true){
//   console.log("this code is happening!")
// }
// --> this code is happening!
// if the condition is true the code will run

// if(false){
//   console.log("this code is happening!")
// }
// if the condition is false nothing will happen


// if(true){
//   "this code is happening!")
// }
// this code works but we can't see it happen due to no console.log


// if(5 > 2){
//   console.log("this code is happening!")
// }
// --> this code is happening!

// if(5 < 2){
//   console.log("this code is happening!")
// }
// --> no output

// var myNum = 1
// if(myNum < 2){
//   console.log("this code is happening!")
// }


// var myAge = 65
// if(myAge >= 65){
//   console.log("you can retire")
// }
// --> you can retire


// var myAge = 66
// if(myAge === 65){
//   console.log("you can retire")
// }
// --> no output


// else is a protected word in JavaScript
// if nothing else is true this action can take place
// conditional statements are most specific at the beginning
// var myAge = 42
// if(myAge >= 65){
//   console.log("you can retire")
// }
// else {
//   console.log("get back to work")
// }
// --> get back to work

// there is only one outcome
// the goal is to get one outcome
// var myAge = 90
// if(myAge >= 65){
//   console.log("you can retire")
// }
// else {
//   console.log("get back to work")
// }


// var myAge = 6
// if(myAge >= 65){
//   console.log("you can retire")
// }
// else if(myAge >= 18){
//   console.log("you can vote!")
// }
// else {
//   console.log("get back to work")
// }
// --> 90: you can retire
// --> 42: you can vote!
// --> 6: get back to work


var myAge = 18
if(myAge < 18){
  console.log("go to school and learn stuff")
} else if(myAge < 64){
  console.log("get back to work!")
} else if(myAge >= 100){
  console.log("you are a legend")
} else if(myAge >= 65){
  console.log("you can retire!")
} else {
  console.log("something went wrong")
}
// --> 6: go to school and learn stuff
// --> 26: get back to work!
// --> 65: you can retire!
// --> 101: you are a legend
// --> "i am 42": something went wrong
// --> -8: go to school and learn stuff