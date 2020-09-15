import React from "react";
import "./App.css";
import Canvas from "./components/canvas";

import KonvaApproach from "./components/canvas/KonvaApproach";

function App() {
  return (
    <div className="App">
      <h1>Something arbitrary</h1>
      <Canvas />

      <h1>Noteassieur:</h1>
      <br />
      <KonvaApproach />
    </div>
  );
}

export default App;
