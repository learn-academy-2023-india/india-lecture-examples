// JavaScript Classes 11/30/2023

// objects - collections of data, they are a data type, store data in key-value pairs
// method - function that belongs to an object
// objects are the intersection between data and behavior

// conditionals, arrays, for loops
// functions - make code reusable

// classes - make objects reusable
// classes - template or a blue print or recipe for objects

// dynamic - creating reusable code

// 2 + 2 - hard coding
// num1 + num2 - dynamic

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

// PascalCase - like camelCase but the first letter is also upper cased
// class - keyword in JavaScript, if, for, function
// constructor - method specific to classes that refines data
// this - codeception, reference to an object when inside an object

// class DoingMath {
//   constructor(){
//     this.num1 = 4,
//     this.num2 = 6,
//     this.num3 = 42
//   }
//   addUp(){
//     return this.num1 + this.num2 + this.num3
//   }
//   subtract(){
//     return this.num1 - this.num2 - this.num3
//   }
// }
// instantiate the class with the keyword new
// create an object from a class
// console.log(new DoingMath)
// --> DoingMath { num1: 4, num2: 6, num3: 42 }
// const math = new DoingMath
// console.log(math)
// console.log(math.addUp())
// --> 52
// console.log(math.subtract())
// --> -44


// class DoingMath {
//   constructor(num1, num2, num3){
//     this.num1 = num1,
//     this.num2 = num2,
//     this.num3 = num3
//   }
//   addUp(){
//     return this.num1 + this.num2 + this.num3
//   }
//   subtract(){
//     return this.num1 - this.num2 - this.num3
//   }
// }
// const math = new DoingMath
// console.log(math)
// --> DoingMath { num1: undefined, num2: undefined, num3: undefined }

// const math1 = new DoingMath(4, 6, 42)
// console.log(math1)
// --> DoingMath { num1: 4, num2: 6, num3: 42 }
// console.log(math1.addUp())
// --> 52

// const math2 = new DoingMath(8, 9, 292)
// console.log(math2)
// --> DoingMath { num1: 8, num2: 9, num3: 292 }
// console.log(math2.subtract())
// --> -293

// invoking - function or method, call a function (), executing logic in a function
// instantiating - making an object from a class, can make an as many objects from a class as you want, each object is unique



class DoingMath {
  constructor(num2, num3){
    this.num1 = 10,
    this.num2 = num2,
    this.num3 = num3
  }
  addUp(){
    return this.num1 + this.num2 + this.num3
  }
  subtract(){
    return this.num1 - this.num2 - this.num3
  }
  onlyOdds(){
    let allNums = [this.num1, this.num2, this.num3]
    return allNums.filter(number => {
      return number % 2 !== 0
    })
  }
}

const math1 = new DoingMath(7, 33)
// instantiating our class and creating an object
console.log(math1)
// log the object
console.log(math1.onlyOdds())
// call the onlyOdds method on the object
// --> [ 7, 33 ]