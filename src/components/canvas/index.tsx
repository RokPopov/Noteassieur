
import React, { useRef, useEffect } from "react";


export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.beginPath();
        context.fillStyle = "black";
        context.fillRect(0, 0, 400, 400);
        context.closePath();
      }
    }
  }, []);
  return (
    <div>
      <h1>Something</h1>
      <canvas
        ref={canvasRef}
        width="700px"
        height="400px"
        style={{
          backgroundColor: "grey",
        }}
      ></canvas>
    </div>
  )
}
