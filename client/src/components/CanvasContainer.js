
import CanvasMain from "./CanvasMain";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import CanvasControls from "./CanvasControls";
import LayersControls from "./IndividualLayer";
import CanvasGenerator from "./CanvasGenerator";
import CreateLayer from "./CreateLayer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function CanvasContainer({user, drawingZ}) {
  const [currentColor, setCurrentColor] = useState("black");
  const [currentWidth, setCurrentWidth] = useState(5);
  const [superLongState, setSuperLongState] = useState([]);
  const [eraseState,setEraseState] = useState(false)

  
  const [information,setInformation] = useState([])
  const [informationreDraw,setInformationReDraw] = useState([])
 
  let history = useHistory();
  //  setSuperLongState((dog)=> [...dog,linePathSingleStroke])

  useEffect(()=>{
      fetch(`/drawings/${drawingZ}`)
      .then((r)=> r.json())
      .then((drawing)=> drawing.layers.forEach((layer)=>setInformation((dog)=> [...dog,`${layer.information},${layer.id},${layer.name}`])
      ))
  },[])

  


  return (
    <>
    <div className = "LastTry">
    <div className ="Donde">
    <CanvasControls drawingZ = {drawingZ} information = {information} superLongState = {superLongState} eraseState = {eraseState} setEraseState = {setEraseState} setCurrentColor = {setCurrentColor} setCurrentWidth = {setCurrentWidth} setSuperLongState = {setSuperLongState} setEraseState = {setEraseState}/>
    </div>
    <div className ="Esta">
    <CanvasGenerator information ={information} user ={user} drawingZ = {drawingZ} setEraseState ={setEraseState} eraseState ={eraseState} currentColor={currentColor} currentWidth={currentWidth} setSuperLongState={setSuperLongState} superLongState={superLongState}/>;
    </div>
    </div>
  </>)
}

export default CanvasContainer;
