// JavaScript Objects 11/29/2023

// JavaScript - data and behavior
// Data - types defined by JavaScript
// Behavior - methods, functions
// Data types - primitive (6): symbols, undefined, Boolean, numbers, strings, null, collections: arrays
// Objects are the collection data type
// Format of [3, 4, 5]

// {} - define a object data type
// stores data in key-values pairs

// h1 {
//   color: "blue"
// }

// key - symbol, unique identifier
// {key: "value"}

// to multi select - pick your item and hold down command and tap d to find the instance

var myObject = {key2: "value2", key1: "value1", key3: "value3"}
// console.log(myObject)
// order doesn't matter - the value is referenced by the key
// console.log(myObject.key1)
// --> "value1"


// var breakfast = {
//   bfast1: "mushroom milkshake", 
//   bfast2: "protein waffles", 
//   bfast3: "oatmeal", 
//   bfast4: "avocados",
//   bfast5: {
//     bev1: "coffee",
//     bev2: "high quality H2O",
//     bev3: "tea"
//   },
//   bfast6: "energy drinks",
//   bfast7: "sweet potato hash",
//   bfast8: ["ham and cheese", "fully loaded", "veggie"]
// }
// console.log(breakfast)
// console.log(breakfast.bfast4)
// --> avocados
// console.log(breakfast.bfast5)
// nested objects
// --> { bev1: 'coffee', bev2: 'high quality H2O', bev3: 'tea' }
// console.log(breakfast.bfast5.bev2)
// --> high quality H2O
// console.log(breakfast.bev2)
// --> undefined
// console.log(breakfast.bfast8)
// --> [ 'ham and cheese', 'fully loaded', 'veggie' ]
// console.log(breakfast.bfast8[1])
// --> fully loaded



var breakfast = {
  bfast1: "mushroom milkshake", 
  bfast2: "protein waffles", 
  bfast3: "oatmeal", 
  bfast4: "avocados",
  bfast5: {
    bev1: "coffee",
    bev2: "high quality H2O",
    bev3: "tea"
  },
  bfast6: "energy drinks",
  bfast7: "sweet potato hash",
  bfast8: ["ham and cheese", "fully loaded", "veggie"]
}
// console.log(bev1)
// --> ReferenceError: bev1 is not defined
// console.log(breakfast.bfast5.bev2)
// --> high quality H2O
// console.log(breakfast.bfast5.bev1)
// console.log(breakfast.bfast5.bev3)
// destructuring - giving JavaScript context to find a key within an object
// var { bev1 } = breakfast.bfast5
// console.log(bev1)
// --> coffee

// destructuring
var { bev1, bev2, bev3 } = breakfast.bfast5
// console.log(bev1)
// --> coffee
// console.log(bev2)
// --> high quality H2O
// console.log(bev3)
// --> tea


// var numbers = {num1: 4, num2: 6, num3: 42}
// console.log(numbers)
// --> { num1: 4, num2: 6, num3: 42 }
// console.log(numbers.num2)
// --> 6
// behavior inside of an object, function that belongs to the object
// method - function that belongs to an object

var numbers = {
  num1: 4, 
  num2: 6, 
  num3: 42,
  addUp: function(){
    return this.num1 + this.num2 + this.num3
  },
  greeter: function(){
    return "Hi!"
  },
  subtract: function(){
    return this.num1 - this.num2 - this.num3
  }
}
// this - reference to an object within the scope of the object
// console.log(numbers)
// --> { num1: 4, num2: 6, num3: 42, addUp: [Function: addUp] }
// console.log(numbers.addUp)
// --> [Function: addUp]
// console.log(numbers.addUp())
// --> 52
// console.log(numbers.greeter())
// --> Hi!
// console.log(numbers.subtract())
// --> -44

// Objects are the intersection of data and behavior

// var pets = [{name: "Duck", type: "duck", age: 2}, {name: "Otis", type: "dog", age: 1}, {name: "Santa's Little Helper", type: "dog", age: 40}, {name: "Lili", name: "dog", age: 5}, {name: "t-rex", type: "piranah", age: 17}]
// console.log(pets[0])
// --> { name: 'Duck', type: 'duck', age: 2 }
// console.log(pets[pets.length-1].name)
// --> t-rex
// console.log(pets[2].name)
// --> Santa's Little Helper
// console.log(pets[4].type)
// --> piranah

// array with only the names of the pets
// var outputTester = ["Duck", "Otis", "Santa's Little Helper", "Lili", "t-rex"]
// starting with an array
// end with an array
// do something to each item in the array - iterate
// get the name of each item in the array
// console.log(pets.length)
// --> 5
// console.log(outputTester.length)
// --> 5

var pets = [
  {name: "Duck", type: "duck", age: 2}, 
  {name: "Otis", type: "dog", age: 1}, 
  {name: "Santa's Little Helper", type: "dog", age: 40}, 
  {name: "Lili", type: "dog", age: 5}, 
  {name: "t-rex", type: "piranah", age: 17}
]

var animalName = pets.map(value => {
  return value.name
})
// console.log(animalName)
// --> [ 'Duck', 'Otis', "Santa's Little Helper", 'dog', 't-rex' ]

// only the animal objects that are more than 4 years old

var animalsOfAge = pets.filter(object => {
  return object.age >= 4
})
console.log(animalsOfAge)
// [
//   { name: "Santa's Little Helper", type: 'dog', age: 40 },
//  { name: 'Lili', type: 'dog', age: 5 },
//   { name: 't-rex', type: 'piranah', age: 17 }
// ]