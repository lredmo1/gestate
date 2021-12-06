import "./App.css";
import { useState } from "react"
import CanvasMain from "./CanvasMain";

function App() {

  const [contextColor, setContextColor] = useState("pink") 

const handleColorChangeGreen = (e) => {
  setContextColor("green")
  console.log("you werk?")
  console.log(contextColor)
}

const handleColorChangeYellow = (e) => {
  setContextColor("yellow")
  console.log("you werk?")
  console.log(contextColor)
}

const handleColorChangeRed = (e) => {
  setContextColor("red")
  console.log("you werk?")
  console.log(contextColor)
}

const handleColorChangeErase = (e) => {
  setContextColor("white")
  console.log("you werk?")
  console.log(contextColor)
}

  return (
    <>
      <CanvasMain CurrentColor={contextColor}/>
      <button onClick={handleColorChangeGreen}>Green</button>
      <button onClick={handleColorChangeYellow}>Yellow</button>
      <button onClick={handleColorChangeRed}>Red</button>
      <button onClick={handleColorChangeErase}>Erase</button>
    </>
  );
}

export default App;
