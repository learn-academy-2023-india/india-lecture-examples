// Javascript Arrays 11/13/23 India

// primitive datatypes: building blocks of programming languages
  // boolean, number, strings, undefined, null, symbols

// composite datatypes: collection of other datatypes

// arrays: store a list of values (data)
  // stored in variables 
  // access each value inside the list individually and perform actions with each value
  // ordered list or collection of data

// Structure of the array
  // variable declaration ---> var, const, let
  // variable name, camelCase and descriptive ---> dinner
  // assignment operator ---> =
  // elements inside an array are stored in square brackets ---> []
  
  var dinner = [ "cornbread dressing", "mashed potatoes and gravy", "sweet potato pie", "bone-in ham", "tamales", "baked mac and cheese", "hawaiian rolls", "smoked turkey" ]

  // element: each individual item in the array, separated by commas
  // value: each element is referred to as a value, the actual data including its datatype

// Properties: what behaviors can be performed
  // index: numeric representation of the position of each value inside in the array, zero-indexed
  
  // length: number of values in the array
  // console.log(dinner.length) //output: 8

  // visual of index  --->   0  1  2  3  4  5  6  7
  // visual of length --->   1  2  3  4  5  6  7  8

  // bracket notation to access different values in the array
  // console.log(dinner[6]) //output: hawaiian rolls
  // console.log(dinner[3]) //output: bone-in ham

  // abstraction: what does the variable represent

// Built-in methods: shortcuts, predetermined functionality, can be mutators or accessors
  // MUTATORS: permanently change the array
    // .push(): add a value to the end of the array
    // .pop(): removes the last value from the array
    // .shift(): removes the value at the 0th index of the array
    // .unshift(): adds value to the 0th index of the array

  // console.log(dinner.push("sweet tea"))
    // output: 9 --> console logging the push method will display the change in the length of the array

  // To perform the push method and its changes
    // perform the action first then console log the mutated array
    dinner.push("sweet tea")
    // console.log(dinner)
    // output: [
    //   'cornbread dressing',
    //   'mashed potatoes and gravy',
    //   'sweet potato pie',
    //   'bone-in ham',
    //   'tamales',
    //   'baked mac and cheese',
    //   'hawaiian rolls',
    //   'smoked turkey',
    //   'sweet tea'
    // ]

  // ACCESSORS: do not modify the array
    // concat: combines two or more array
    var beverage = ["lemonade", "water", "Grey Goose", "Arnold Palmer"]
    // console.log(dinner.concat(beverage))
      // output: [
      //   'cornbread dressing',
      //   'mashed potatoes and gravy',
      //   'sweet potato pie',
      //   'bone-in ham',
      //   'tamales',
      //   'baked mac and cheese',
      //   'hawaiian rolls',
      //   'smoked turkey',
      //   'sweet tea',
      //   'lemonade',
      //   'water',
      //   'Grey Goose',
      //   'Arnold Palmer'
      // ]

    // console.log(dinner)
      // output: 
        // [
        //   'cornbread dressing',
        //   'mashed potatoes and gravy',
        //   'sweet potato pie',
        //   'bone-in ham',
        //   'tamales',
        //   'baked mac and cheese',
        //   'hawaiian rolls',
        //   'smoked turkey',
        //   'sweet tea'
        // ]

  // To store the changes from the concat method and reference later
    // store the method in a variable then console log the variable to track the changes
    var fullMeal = dinner.concat(beverage)
    // console.log(fullMeal)
    // output:
      // [
      //   'cornbread dressing',
      //   'mashed potatoes and gravy',
      //   'sweet potato pie',
      //   'bone-in ham',
      //   'tamales',
      //   'baked mac and cheese',
      //   'hawaiian rolls',
      //   'smoked turkey',
      //   'sweet tea',
      //   'lemonade',
      //   'water',
      //   'Grey Goose',
      //   'Arnold Palmer'
      // ]


// [] 
// ""
// index - zero index, first index is 0, increment by one moving left to right
// value - the thing that is at an index
var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.
// console.log(numbers.unshift(0))
// --> 6 - new length of the array
// console.log(numbers)
// --> [ 0, 2, 4, 6, 8, 10 ]
// unshift is a mutator method

// Write the code that will add the number 12 to the end of the array.
// numbers.push(12)
// --> 6
// console.log(numbers)
// --> [ 2, 4, 6, 8, 10, 12 ]

// Write the code that will remove the first number from the array.
// console.log(numbers.shift())
// --> 2
// console.log(numbers)
// --> [ 4, 6, 8, 10 ]
// numbers.shift()
// console.log(numbers)
// --> [ 6, 8, 10 ]

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)

// console.log([0].concat(numbers))
// ^ is equivalent to the next two lines
var myNewArray = [0].concat(numbers)
// console.log(myNewArray)
// [ 0, 2, 4, 6, 8, 10 ]

// console.log(numbers)
// --> [2, 4, 6, 8, 10]


var ourCohort = "India 2023"
// reverse all the letter of this string
// --> "3202 aidnI"
// ourCohort.reverse()
// console.log(ourCohort)
// --> TypeError: ourCohort.reverse is not a function

// console.log(ourCohort.split())
// --> [ 'India 2023' ]

// var stringToArray = ourCohort.split()
// stringToArray.reverse()
// console.log(stringToArray)
// --> [ 'India 2023' ]


var stringToArray = ourCohort.split("")
console.log(stringToArray)
// --> ['I', 'n', 'd', 'i', 'a', ' ', '2', '0', '2', '3']
stringToArray.reverse()
console.log(stringToArray)
// --> [ '3', '2', '0', '2', ' ', 'a', 'i', 'd', 'n', 'I' ]
// console.log(stringToArray.join())
// --> 3,2,0,2, ,a,i,d,n,I
console.log(stringToArray.join(""))
// --> 3202 aidnI