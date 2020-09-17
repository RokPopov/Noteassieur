import React, { useEffect, useState } from "react"
import "./App.css"
import NoteTaker from "./components/canvas/NoteTaker"

import VideoList from "./components/canvas/VideoPlayer/VideoList"
import { useHistory, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { stageCurVideo } from "./store/video/actions"

function App() {
  const history = useHistory()

  const location = useLocation()

  const dispatch = useDispatch()

  const [num, setNum] = useState(5)

  useEffect(() => {
    if (num > 0) {
      setNum(num - 1)
      const params = new URLSearchParams(location.search)
      const VideoUrl = params.get("url")

     

      if (VideoUrl) {
        dispatch(stageCurVideo(VideoUrl))
      }
    }
  }, [])

  return (
    <div className="App">
      <h1>Noteassieur</h1>
      <VideoList />
    </div>
  )
}

export default App
