import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Slider from "@material-ui/core/Slider"
import { useDispatch, useSelector } from "react-redux"
import { selectBtnRangeVisible, selectCurTimeNoteId } from "../store/appstore/selector"
import { selectMinMaxValueById, selectTotalTime } from "../store/timenotes/selectors"
import { stageSetTimeIn, stageSetTimeOut } from "../store/timenotes/actions"
import Duration from "./canvas/VideoPlayer/Duration"

const useStyles = makeStyles({
  root: {
    width: 500
  }
})

function valuetext(value: any) {
  return `${value}°C`
}

export default function RangeSlider() {
  const show = useSelector(selectBtnRangeVisible)
  const curtimenotid = useSelector(selectCurTimeNoteId)

  const inoutRange = useSelector(selectMinMaxValueById(curtimenotid))

  console.log("I AM INOUT", inoutRange)

  const classes = useStyles()

  const totalTime = useSelector(selectTotalTime)

  const inValue = <Duration seconds={inoutRange?.timeIn !== undefined ? inoutRange?.timeIn * totalTime : 25} />
  const outValue = <Duration seconds={inoutRange?.timeOut !== undefined ? inoutRange.timeOut * totalTime : 75} />

  useEffect(() => {
    setValue([inValue, outValue])
  }, [show])

  const initialValue = [inValue, outValue]

  const [value, setValue] = useState(initialValue)

  const dispatch = useDispatch()

  const handleChange = (event: any, newValue: any) => {
    dispatch(stageSetTimeIn(newValue[0], curtimenotid))
    dispatch(stageSetTimeOut(newValue[1], curtimenotid))

    setValue(newValue)
  }
  return (
    <>
      {show ? (
        <div style={{ width: "500px", margin: "auto" }}>
          <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
              Temperature range
            </Typography>
            <Slider style={{ position: "relative" }} value={totalTime} onChange={handleChange} valueLabelDisplay="auto" aria-labelledby="range-slider" getAriaValueText={valuetext} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  )
}
