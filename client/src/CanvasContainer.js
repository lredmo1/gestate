
import CanvasMain from "./CanvasMain";
import { useState } from "react";
import CanvasControls from "./CanvasControls";
import LayersControls from "./LayersControls";
import CanvasGenerator from "./CanvasGenerator"

function CanvasContainer() {
  const [currentColor, setCurrentColor] = useState("black");
  const [currentWidth, setCurrentWidth] = useState(5);
  const [superLongState, setSuperLongState] = useState([]);
  const [eraseState,setEraseState] = useState(false)


  return (
    <>
    <CanvasControls superLongState = {superLongState} eraseState = {eraseState} setEraseState = {setEraseState} setCurrentColor = {setCurrentColor} setCurrentWidth = {setCurrentWidth} setSuperLongState = {setSuperLongState} setEraseState = {setEraseState}/>
    <CanvasGenerator setEraseState ={setEraseState} eraseState ={eraseState} currentColor={currentColor} currentWidth={currentWidth} setSuperLongState={setSuperLongState} superLongState={superLongState}/>;
  </>)
}

export default CanvasContainer;
