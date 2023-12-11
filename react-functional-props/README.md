## React Functional Props 12/11/23 India

- functional props: allows data to be shared from the nested component back up the river to the main component App.js, taking advantage of creating a function on the App.js and performing function call/invoking the function on the nested component

## Work flow
### Create functional components
```js
// basic functional component
// imports
import React from "react"
import './App.css';

// functional component declaration
const App = () => {
  // display on the UI
  return(
    <>
      <h1>Jingle All the Way as We Go on Vacay!</h1>
    </>
  )
}

// export
export default App;
```

### Create a vacation planning app that will track the amount of travelers and inform the traveler that they have reserve a spot.
#### React State
1. Store the vacation data in react state
2. import useState() react hook
3. destructure state variable and setter function from useState

#### Display Data on a Nested Component
1. Create a components directory on src
2. Create a file with the same name as the intended react component: Trip.js
3. Pass the vacation data down as props to the nested component
4. Accept the data on the nested component
5. Map across each value in the array to display it as a line item of an unordered list

#### Conditional Rendering
conditional rendering: display data based on a true conditional involving the logical AND &&
`{value.selected && <p>Thank you for reserving a spot.</p>}`

#### Updating the values of a state variable
- Switching selected value to true
- Change the value of travelers as a user select a vacation

1. Create a function that will update the travelers and selected state variables when a vacation is selected
- PSEUDOCODE
  - input: identify what vacation was selected, parameter named selectedTrip
  - output: update the value of select to true and add a traveler
  - function name: vacationPlan
  - process
    - Create a function named vacationPlan
    - initially just console.log selectedTrip to see what datatype is being passed --> determined that Trip component will send the index of the selected trip as a number
    - reassign the value of the selected key to true
    - reassign the value of the traveler to add one to the current value of the traveler
    - to update values of the state variable, use the setter function `setVacation`
      - use spread operator `...` to copy the changes 
      - use array literal syntax to store as an array `[]`
      
    - function call: assign function call to onClick attribute for a button
      - button will be stored on Trip.js

- immediately invoked function: function that is immediately invoked or called without waiting for user interaction
- stack overflow: when the actions of an immediately invoked function exceeds the memory of the application 
  - use Ctrl + C to stop

