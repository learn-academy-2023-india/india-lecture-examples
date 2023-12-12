import React from "react"

const Greeter = (props) => {
  console.log(props)
  return (
    <>
      <p>Hello: {props.userInput}</p>
    </>
  )
}

export default Greeter
