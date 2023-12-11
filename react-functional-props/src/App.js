// imports
import React, { useState } from "react"
import './App.css';

// functional component declaration
const App = () => {
  // state variables, variables, custom functions
  const [vacation, setVacation] = useState(
    [
      { destination: "Montego Bay", travelers: 0, selected: false },
      { destination: "Bora Bora", travelers: 0, selected: false }
    ]
  )

  // debugging
  console.log("vacation: ", vacation)
  // display on the UI
  return(
    <>
      <h1>Jingle All the Way as We Go on Vacay!</h1>
    </>
  )
}

// export
export default App;
