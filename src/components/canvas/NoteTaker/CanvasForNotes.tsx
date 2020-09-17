import React from "react"

export default function CanvasForNotes(props: any) {
  return (
    <div
      style={{
        backgroundColor: "white",
        overflow: "scroll",
        borderRadius: "5px",

        width: "550px",
        height: "300px",
        margin: "auto",
        border: "1px black solid",
        boxShadow: "1px 2px 3px rgba(0.5,0.5,1,5.2)"
      }}
    >
      {props.children}
    </div>
  )
}
