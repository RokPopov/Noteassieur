import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Slider from "@material-ui/core/Slider"
import { useDispatch, useSelector } from "react-redux"
import { selectBtnRangeVisible, selectCurTimeNoteId } from "../../store/appstore/selector"
import { selectMinMaxValueById } from "../../store/timenotes/selectors"
import { stageSetTimeIn, stageSetTimeOut } from "../../store/timenotes/actions"
import { selectLengthOfVid } from "../../store/video/selector"
import "./style.css"

const useStyles = makeStyles({
  root: {}
})

function valuetext(value: any) {
  return `${value}°C`
}

export default function RangeSlider() {
  const show = useSelector(selectBtnRangeVisible)
  const curtimenotid = useSelector(selectCurTimeNoteId)

  const inoutRange = useSelector(selectMinMaxValueById(curtimenotid))

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    dispatch(stageSetTimeIn(parseInt(e.target.value) / lengthOfVid, curtimenotid))
  }

  const handleChangeOut = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    dispatch(stageSetTimeOut(parseInt(e.target.value) / lengthOfVid, curtimenotid))
  }
  return (
    <>
      <div style={{ width: "500px", margin: "auto", height: "15px" }}>
        {show ? (
          <div className={classes.root}>
            <input value={inValue} min={0} max={lengthOfVid} onChange={handleChange} style={{ background: "#fff", cursor: "col-resize", outline: "none", top: "5px", position: "relative", width: "500px", appearance: "none" }} type="range" />
            <input value={outValue} min={0} max={lengthOfVid} onChange={handleChangeOut} style={{ background: "#fff", cursor: "col-resize", outline: "none", top: "5px", position: "relative", width: "500px", appearance: "none" }} type="range" />
            {/* <Slider min={0} max={lengthOfVid} style={{ position: "relative", width: `${inValue + outValue}` }} value={value} onChange={handleChange} valueLabelDisplay="auto" aria-labelledby="range-slider" getAriaValueText={valuetext} /> */}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  )
}
