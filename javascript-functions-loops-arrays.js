// JavaScript Function, Loops, Arrays 11/17/2023


// var greetings = ["hello", "yo", "hola", "hiiiii", "hey"]
// console.log(greetings.toUpperCase())
// --> TypeError: greetings.toUpperCase is not a function
// [].toUpperCase()

// console.log(greetings[0].toUpperCase())
// console.log(greetings[1].toUpperCase())
// console.log(greetings[2].toUpperCase())

// repetitive code
// var cohorts = ["alpha", "bravo", "echo", "india"]
// for(let index = 0; index < cohorts.length; index++){
//   cohorts[index].toUpperCase()
// }

// for(let index = 0; index < greetings.length; index++){
//   greetings[index].toUpperCase()
// }

// console.log(greetings.length)
// --> 5
// console.log(typeof greetings.length)
// --> number


var greetings = ["hello", "yo", "hola", "hiiiii", "hey"]
var cohorts = ["alpha", "bravo", "echo", "india"]

// input: array of string
// output: array of string, all the characters in the string in uppercase letters
// only one output so no conditionals
// need access each item in the array - iteration

const upcasingArraysOfStrings = (arrayOfString) => {
  let collectionArray = [] // defining an empty array
  for(let i = 0; i < arrayOfString.length; i++){
    collectionArray.push(arrayOfString[i].toUpperCase())
  }
  return collectionArray
}
// console.log(upcasingArraysOfStrings(greetings))
// console.log(upcasingArraysOfStrings(cohorts))

// --> undefined
// --> HELLO
// --> ALPHA

// --> [ 'HELLO', 'YO', 'HOLA', 'HIIIII', 'HEY' ]



// input: array of numbers
// output: array of numbers with only odd numbers
// make a decision about each item in the array - iteration
// if the number is odd do something with it - conditional
// if the number is even ignore it

// refactor - making your code better after getting it to work
const onlyOddNumbers = (arrayOfNumbers) => {
  let arrayOfOddNumbers = []
  for(let index = 0; index < arrayOfNumbers.length; index++){
    // if(arrayOfNumbers[index] % 2 === 1 || arrayOfNumbers[index] % 2 === -1 )
    if(arrayOfNumbers[index] % 2 !== 0){
      arrayOfOddNumbers.push(arrayOfNumbers[index])
    }
  }
  return arrayOfOddNumbers
}
// console.log(onlyOddNumbers([2, 3, 4, 5, 6]))
// --> [ 3, 5 ]
console.log(onlyOddNumbers([0, -3, 21, 2000, 1000, -100]))
// --> [ 21 ]
// console.log(onlyOddNumbers([]))
// --> []
// console.log(onlyOddNumbers([10, 20, 29, 43, 67]))
// --> [ 29, 43, 67 ]
// console.log(onlyOddNumbers(8))
// --> []

// console.log(-3 % 2)
// --> -1