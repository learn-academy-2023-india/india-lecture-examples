// imports
import React, { useState } from "react"
import Trip from "./components/Trip";
import './App.css';

// functional component declaration
const App = () => {
  // state variables, variables, custom functions
  const [vacation, setVacation] = useState(
    [
      { destination: "Montego Bay", travelers: 0, selected: false },
      { destination: "Bora Bora", travelers: 0, selected: false },
      { destination: "Dubai", travelers: 0, selected: false }
    ]
  )

  // debugging
  console.log("vacation: ", vacation)

  // function to update state variables
  const vacationPlan = (selectedTrip) => {
    // console.log("selectedTrip data sent from Trip.js: ", selectedTrip)
    // console.log("vacation after selecting the button: ", vacation)
    vacation[selectedTrip].selected = true
    // vacation[selectedTrip].travelers = vacation[selectedTrip].travelers + 1 // long hand
    vacation[selectedTrip].travelers += 1 // short hand
    setVacation([...vacation])
  }
  
  // display on the UI
  return(
    <>
      <h1>Jingle All the Way as We Go on Vacay!</h1>
      <Trip vacation={vacation} vacationPlan={vacationPlan} />
    </>
  )
}

// export
export default App;
