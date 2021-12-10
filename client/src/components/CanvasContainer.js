
import CanvasMain from "./CanvasMain";
import { useState } from "react";
import CanvasControls from "./CanvasControls";
import LayersControls from "./LayersControls";
import CanvasGenerator from "./CanvasGenerator"

function CanvasContainer({user, drawingZ}) {
  const [currentColor, setCurrentColor] = useState("black");
  const [currentWidth, setCurrentWidth] = useState(5);
  const [superLongState, setSuperLongState] = useState([]);
  const [eraseState,setEraseState] = useState(false)


  return (
    <>
    <div className = "LastTry">
    <div className ="Donde">
    <CanvasControls superLongState = {superLongState} eraseState = {eraseState} setEraseState = {setEraseState} setCurrentColor = {setCurrentColor} setCurrentWidth = {setCurrentWidth} setSuperLongState = {setSuperLongState} setEraseState = {setEraseState}/>
    </div>
    <div className ="Esta">
    <CanvasGenerator user ={user} drawingZ = {drawingZ} setEraseState ={setEraseState} eraseState ={eraseState} currentColor={currentColor} currentWidth={currentWidth} setSuperLongState={setSuperLongState} superLongState={superLongState}/>;
    </div>
    </div>
  </>)
}

export default CanvasContainer;
