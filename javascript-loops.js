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

var dinner = [ "cornbread dressing", "mashed potatoes and gravy", "sweet potato pie", "bone-in ham", "tamales", "baked mac and cheese", "hawaiian rolls", "smoked turkey" ]

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


// Make a sentence with each value in the array
  // string interpolation `${variable}`
// for(let i = 0; i < 8; i = i + 1) {
//   console.log(`I can't wait to eat ${dinner[i]}.`)
// }

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

for(let i = 0; i < dinner.length; i = i + 1) {
  console.log(`At index ${i}: I can't wait to eat ${dinner[i]}.`)
}
  console.log(dinner.length)

// Output:
// I can't wait to eat cornbread dressing.
// I can't wait to eat mashed potatoes and gravy.
// I can't wait to eat sweet potato pie.
// I can't wait to eat bone-in ham.
// I can't wait to eat tamales.
// I can't wait to eat baked mac and cheese.
// I can't wait to eat hawaiian rolls.
// I can't wait to eat smoked turkey.
