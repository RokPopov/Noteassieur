import React from "react";

export default function CanvasForNotes(props: any) {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "550px",
        height: "200px",
        margin: "auto",
      }}
    >
      {props.children}
    </div>
  );
}
