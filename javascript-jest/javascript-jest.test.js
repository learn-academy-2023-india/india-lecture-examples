// JavaScript Jest 11/28/2023

// make a directory (folder) that holds our test code
// file extension for the test file .test.js

// Jest - JavaScript testing framework
// Vanilla JavaScript - out of the box
// Code library - collection of code snippets, packages in a way that creates useful functionality
// Package manager - assembles and manages the code snippets
// Yarn - package manager
// $ yarn add jest
// Yarn is project specific
// the yarn add jest command gave us: yarn.lock, package.json, node_modules


// command to run jest: yarn jest


// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/sarahproctor/Desktop/learn/india-lecture-examples/javascript-jest/node_modules/.bin/jest
//  FAIL  ./javascript-jest.test.js
//   ● Test suite failed to run

//     Your test suite must contain at least one test.

//       at onResult (node_modules/@jest/core/build/TestScheduler.js:133:18)
//           at Array.map (<anonymous>)

// Test Suites: 1 failed, 1 total
// Tests:       0 total
// Snapshots:   0 total
// Time:        0.212 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

// code syntax that is necessary for Jest to work
// describe(() => {
  // it(() => {})
// })

// expect statement is the magic - calls your function and examines the output
// describe("greeter", () => {
//   it("returns a generic greeting", () => {
//     expect(greeter()).toEqual("Hello, LEARN student!")
//   })
// })



describe("lettersOnly", () => {
  it("a function that takes in an array of numbers and letters and returns a string with only the letters", () => {
    const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
    expect(lettersOnly(comboArr)).toEqual("nicework")
    expect(lettersOnly([3, 4, "h", "e", 8, true, "y"])).toEqual("hey")
  })
})

// "nicework"

const lettersOnly = (array) => {
  return array.filter(value => {
    return typeof value === "string"
  }).join("")
}

// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/sarahproctor/Desktop/learn/india-lecture-examples/javascript-jest/node_modules/.bin/jest
//  PASS  ./javascript-jest.test.js
//   lettersOnly
//     ✓ a function that takes in an array of numbers and letters and returns a string with only the letters (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.216 s
// Ran all test suites.
// ✨  Done in 0.71s.

// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
// const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]

// input: array of strings
// output: array of string
// do something to every item in the array
// modify each item in the array - map
// odd indexes in the string to capitalize letters
// split the string and modify the characters at the odd index

describe("rafiki", () => {
  it("is a function that takes in an array of strings and returns an array of strings with every other letter capitalized", () => {
    const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
    expect(rafiki(makesWackyWords)).toEqual(["sImBa", "nAlA", "zAzU", "rAfIkI"])
  })
})

// --> ReferenceError: rafiki is not defined
// --> Expected: ["sImBa", "nAlA", "zAzU", "rAfIkI"], Received: undefined
const rafiki = (arrayOfString) => {
  return arrayOfString.map(value => {
    // value.split().map().join()
    return value.split("").map((value, index) => {
      if(index % 2 !== 0){
        return value.toUpperCase()
      } else {
        return value
      }
    }).join("")
  })
}

// create a function that returns drink coffee if you are tired and keep working if you are not tired
// input: string
// output: string - one of two options
// make a decision based on the input
// if tired drink coffee
// if not tired keep working

describe("work", () => {
  it("is a function that returns drink coffee if you are tired and keep working if you are not tired", () => {
    expect(work("tired")).toEqual("drink coffee")
    expect(work("not tired")).toEqual("keep working")
  })
})

// --> ReferenceError: work is not defined

const work = (string) => {
  if(string === "tired"){
    return "drink coffee"
  } else {
    return "keep working"
  }
}