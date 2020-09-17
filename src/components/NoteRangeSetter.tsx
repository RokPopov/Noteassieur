import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Slider from "@material-ui/core/Slider"
import { useDispatch, useSelector } from "react-redux"
import { selectBtnRangeVisible, selectCurTimeNoteId } from "../store/appstore/selector"
import { selectMinMaxValueById } from "../store/timenotes/selectors"
import { stageSetTimeIn, stageSetTimeOut } from "../store/timenotes/actions"
import { selectLengthOfVid } from "../store/video/selector"

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

  const lengthOfVid = useSelector(selectLengthOfVid)

  const inValue = inoutRange?.timeIn !== undefined ? inoutRange?.timeIn * lengthOfVid : 25
  const outValue = inoutRange?.timeOut !== undefined ? inoutRange.timeOut * lengthOfVid : 75

  useEffect(() => {
    setValue([inValue, outValue])
  }, [show])

  const initialValue = [inValue, outValue]

  const [value, setValue] = useState(initialValue)

  const dispatch = useDispatch()

  const handleChange = (event: any, newValue: any) => {
    dispatch(stageSetTimeIn(newValue[0] / lengthOfVid, curtimenotid))
    dispatch(stageSetTimeOut(newValue[1] / lengthOfVid, curtimenotid))

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
            <Slider min={0} max={lengthOfVid} style={{ position: "relative" }} value={value} onChange={handleChange} valueLabelDisplay="auto" aria-labelledby="range-slider" getAriaValueText={valuetext} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  )
}
