import "./App.css";
import { useState } from "react"
import CanvasMain from "./CanvasMain";

function App() {

  const [contextColor, setContextColor] = useState("pink") 
  const [lineWidth, setLineWidth] = useState(5) 

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

const handleSmallLine = (e) => {
  setLineWidth(1)
}

const handleMediumLine = (e) => {
  setLineWidth(5)
}

const handleLargeLine = (e) => {
  setLineWidth(10)
}

const handleExtraLargeLine = (e) => {
  setLineWidth(20)
}

const handleSuperLine = (e) => {
  setLineWidth(100)
}

  return (
    <>
      <CanvasMain currentColor={contextColor} currentWidth={lineWidth}/>
      <button onClick={handleColorChangeGreen}>Green</button>
      <button onClick={handleColorChangeYellow}>Yellow</button>
      <button onClick={handleColorChangeRed}>Red</button>
      <button onClick={handleColorChangeErase}>Erase</button>
      <button onClick={handleSmallLine}>Small</button>
      <button onClick={handleMediumLine}>Medium</button>
      <button onClick={handleLargeLine}>Large</button>
      <button onClick={handleExtraLargeLine}>Extra Large</button>
      <button onClick={handleSuperLine}>Super</button>
    </>
  );
}

export default App;
