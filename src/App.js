import { useState } from "react";

import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div className="container">
      <h1 className="title">Click the button to change color</h1>
      <br />
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        className="change-color-button"
      >
        change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
