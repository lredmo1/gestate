
import CanvasMain from "./CanvasMain";
import { useState, useEffect } from "react";
import CanvasControls from "./CanvasControls";
import LayersControls from "./LayersControls";
import CanvasGenerator from "./CanvasGenerator";
import CreateLayer from "./CreateLayer";

function CanvasContainer({user, drawingZ}) {
  const [currentColor, setCurrentColor] = useState("black");
  const [currentWidth, setCurrentWidth] = useState(5);
  const [superLongState, setSuperLongState] = useState([]);
  const [eraseState,setEraseState] = useState(false)

  
  const [information,setInformation] = useState([])
  const [informationreDraw,setInformationReDraw] = useState([])
 
  //  setSuperLongState((dog)=> [...dog,linePathSingleStroke])

  useEffect(()=>{
      fetch(`/drawings/${drawingZ}`)
      .then((r)=> r.json())
      .then((drawing)=> drawing.layers.forEach((layer)=>setInformation((dog)=> [...dog,`${layer.information},${layer.id}`])
      ))
  },[])

  


  return (
    <>
    <CreateLayer drawingZ = {drawingZ} information = {information}/>
    <div className = "LastTry">
    <div className ="Donde">
    <CanvasControls information = {information} superLongState = {superLongState} eraseState = {eraseState} setEraseState = {setEraseState} setCurrentColor = {setCurrentColor} setCurrentWidth = {setCurrentWidth} setSuperLongState = {setSuperLongState} setEraseState = {setEraseState}/>
    </div>
    <div className ="Esta">
    <CanvasGenerator information ={information} user ={user} drawingZ = {drawingZ} setEraseState ={setEraseState} eraseState ={eraseState} currentColor={currentColor} currentWidth={currentWidth} setSuperLongState={setSuperLongState} superLongState={superLongState}/>;
    </div>
    </div>
  </>)
}

export default CanvasContainer;
