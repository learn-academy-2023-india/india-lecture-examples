// imports
import React from "react"

// functional component declaration
const Trip = (props) => {
  // console.log("props: ", props)
  // console.log("vacation: ", props.vacation)
  // grabbing the destination name at the 0th index
  // console.log("destination: ", props.vacation[0].destination)
  // console.log("traveler: ", props.vacation[0].travelers)
  // console.log("function: ", props.vacationPlan)

  // display on the UI
  return(
    <>
      {props.vacation.map((value, index) => {
        return(
          <ul key={index}>
            <li>
              {value.destination} - Total travelers: {value.travelers}
            </li>
            <button onClick={() => props.vacationPlan(index)}> Select this trip </button>
            {value.selected && 
              <p>Thank you for reserving a spot.</p>
            }
          </ul>
        )
      })}
    </>
  )
}

// export
export default Trip;