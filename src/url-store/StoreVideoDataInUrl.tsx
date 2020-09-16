import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation, useParams } from "react-router-dom"
import { stageCurVideo } from "../store/video/actions"
import { selectHaveVideo } from "../store/video/selector"

type Props = {
  name: string
}

export default function StoreVideoDataInUrl(props: Props) {
  console.log("FROM THIS THING,", props.name)

  const history = useHistory()

  const location = useLocation()

  const dispatch = useDispatch()

  const novid = useSelector(selectHaveVideo)

  console.log("THIS IS NOVID:", novid)

  const [num, setNum] = useState(5)

  useEffect(() => {
    if (num > 0) {
      setNum(num - 1)
      const params = new URLSearchParams(location.search)
      const VideoUrl = params.get("url")

      console.log("Hello?")

      if (VideoUrl) {
        dispatch(stageCurVideo(VideoUrl))
      }
    }
  }, [props])

  return <div></div>
}
