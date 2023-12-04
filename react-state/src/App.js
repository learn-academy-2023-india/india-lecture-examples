import React from "react"
import MonthlyMile from "./components/MonthlyMile"
import Square from "./components/Square"
import "./App.css"

const App = () => {
  return (
    <>
      <h1>Run Tracker</h1>
      <h3>January Miles</h3>
      <MonthlyMile />
      <h3>February Miles</h3>
      <MonthlyMile />
      <h3>March Miles</h3>
      <MonthlyMile />
      <h3>April Miles</h3>
      <MonthlyMile />
      <Square />
    </>
  )
}

export default App
