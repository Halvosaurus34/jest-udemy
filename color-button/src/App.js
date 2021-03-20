import "./App.css";
import { useState } from "react";
function App() {
  let isRed = true;
  let [color, setColor] = useState("blue");
  let [styleColor, setStyleColor] = useState("red");
  const buttonText = function () {
    if (isRed) {
      setColor("red");
      setStyleColor("blue");
      isRed = false;
    } else {
      setColor("blue");
      setStyleColor("red");
      isRed = true;
    }
  };
  return (
    <div>
      <button style={{ backgroundColor: styleColor }} onClick={buttonText}>
        Change to {color}
      </button>
    </div>
  );
}

export default App;
