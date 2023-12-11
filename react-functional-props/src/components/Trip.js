// imports
import React from "react"

// functional component declaration
const Trip = (props) => {
  console.log("vacation: ", props.vacation)
  // grabbing the destination name at the 0th index
  // console.log("destination: ", props.vacation[0].destination)
  // console.log("traveler: ", props.vacation[0].travelers)

  // display on the UI
  return(
    <>
      <ul>
        {props.vacation.map((value, index) => {
          return(
            <>
              <li key={index}>
                {value.destination} - Total travelers: {value.travelers}
              </li>
              {value.selected && 
                <p>Thank you for reserving a spot.</p>
              }
            </>
          )
        })}
      </ul>
    </>
  )
}

// export
export default Trip;