## React Functional Props 12/11/23 India

- functional props: allows data to be shared from the nested component back up the river to the main component App.js, taking advantage of creating a function on the App.js and performing function call/invoking the function on the nested component

## Work flow
- Create functional components
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

- Create a vacation planning app that will track the amount of travelers and inform the traveler that they have reserve a spot.
## React State
1. Store the vacation data in react state
2. import useState() react hook
3. destructure state variable and setter function from useState




conditional rendering
immediately invoked function
stack overflow

