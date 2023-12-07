import React from "react"

const Episode = (props) => {
  // props = {title: 'CSS Rocks!'}
  // console.log(props)
  return <div className="card">Episode Title: {props.title}</div>
}

export default Episode
