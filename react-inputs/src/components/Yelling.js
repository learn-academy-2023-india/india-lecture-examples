import React from "react"

const Yelling = (props) => {
  // const props = {userInput: 'fdsfdsfdsfdsf'}
  return (
    <>
      <p>Yelling: {props.userInput.toUpperCase()} </p>
    </>
  )
}

export default Yelling
