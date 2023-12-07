import React, { useState } from "react"
import Episode from "./components/Episode"
import MediaPlayer from "./components/MediaPlayer"
import "./App.css"

const App = () => {
  const episodes = [
    "CSS Rocks!",
    "Building Projects to Learn",
    "Stop Over-Engineering Your CSS",
    "Write Boring Code",
    "ChatGPT and AI: Initial Reactions",
    "Goodbye Passwords, Hello Passkeys",
    "Making a Strong Case for Accessibility",
    "New Things in Node.js"
  ]
  const [currentEpisode, setCurrentEpisode] = useState(episodes[0])
  // console.log(currentEpisode)
  const handleNextEpisode = () => {
    // setCurrentEpisode(currentEpisode + 1)
    // --> CSS Rocks!1
    // --> "CSS Rocks!" + 1
    const nextIndex = episodes.indexOf(currentEpisode) + 1
    setCurrentEpisode(episodes[nextIndex])
  }

  return (
    <>
      <h1>Compressed.fm Mock</h1>
      <MediaPlayer
        currentEpisode={currentEpisode}
        handleNextEpisode={handleNextEpisode}
      />
      <div className="cards">
        {episodes.map((episode, index) => {
          return <Episode title={episode} key={index} />
        })}

        {/* <Episode title={episodes[0]} />
        <Episode title={episodes[1]} />
        <Episode title={episodes[2]} />
        <Episode title={episodes[3]} />
        <Episode title={episodes[4]} />
        <Episode title={episodes[5]} /> */}
      </div>
    </>
  )
}

export default App
