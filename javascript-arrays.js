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

  // visual of index  --->   0  1, 2, 3, 4, 5, 6, 7
  // visual of length --->   1  2  3  4  5  6  7  8

  // bracket notation to access different values in the array
  // console.log(dinner[6]) //output: hawaiian rolls
  // console.log(dinner[3]) //output: bone-in ham

  // abstraction: what does the variable represent

// Built-in methods: shortcuts, predetermined functionality
  // mutators: permanently change the array
  // .push(): add a value to the end of the array
  // .pop(): removes the last value from the array
  // .shift(): removes the value at the 0th index of the array
  // .unshift(): adds value to the 0th index of the array

  // console.log(dinner.push("sweet tea"))
  // output: 9 --> console logging the push method will display the change in the length of the array

  // perform the action first then console log the mutated array
  dinner.push("sweet tea")
  console.log(dinner)
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

  // accessor: do not modify the array
    // concat: combines two or more array
    var beverage = ["lemonade", "water", "Grey Goose", "Arnold Palmer"]
    console.log(dinner.concat(beverage))
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


    console.log(dinner)
    // output: 