import React, { useState } from "react"

const MonthlyMile = () => {
  // state hook, defines a variable and a method to update the variable
  // const [variable, method] = useState(initial value)
  const [miles, setMiles] = useState(0)
  console.log(miles)

  const addAMile = () => {
    setMiles(miles + 1)
  }

  const banana = () => {
    setMiles(0)
  }

  return (
    <>
      <p>Mile: {miles}</p>
      <button onClick={addAMile}>Add a Mile</button>
      <button onClick={banana}>Reset Month</button>
    </>
  )
}

export default MonthlyMile
