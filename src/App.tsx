import React from "react";
import "./App.css";
import Canvas from "./components/canvas";

import KonvaApproach from "./components/canvas/KonvaApproach";

function App() {
  return (
    <div className="App">
      <Canvas />

      <h1>Noteassieur:</h1>
      <br />
      <KonvaApproach />
    </div>
  );
}

export default App;
