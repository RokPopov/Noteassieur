import React from "react"
import "./App.css"
import NoteTaker from "./components/canvas/NoteTaker"

import VideoList from "./components/canvas/VideoPlayer/VideoList"

function App() {
  return (
    <div className="App">
      <h1>Noteassieur:</h1>
      <VideoList />
      <br />
      <NoteTaker />
    </div>
  )
}

export default App
