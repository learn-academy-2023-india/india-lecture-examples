import React, { useState } from "react"
import Greeter from "./components/Greeter"
import Yelling from "./components/Yelling"

const App = () => {
  const [userInput, setUserInput] = useState("")
  const handleInput = (event) => {
    setUserInput(event.target.value)
  }
  console.log(userInput)

  return (
    <>
      <h1>Greeter App</h1>
      <input type="text" onChange={handleInput} />
      <Greeter userInput={userInput} />
      <Yelling userInput={userInput} />
    </>
  )
}

export default App
