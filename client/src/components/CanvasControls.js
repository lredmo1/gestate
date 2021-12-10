import { useState, useEffect } from "react";
import ToolBarDetail from "./ToolBarDetail"
import { NavLink } from 'react-router-dom'
import CreateLayer from "./CreateLayer";


function CanvasControls({drawingZ, information, setCurrentColor, setCurrentWidth, setSuperLongState, setEraseState, superLongState}) {

    const [toolbarDetailUnambiguous, setToolbarDetailUnambiguous] = useState("")
  

    const handleColorChangeGreen = (e) => {
    setCurrentColor("green");
    };

    const handleColorChangeBlack = (e) => {
    setCurrentColor("black");
    };

    const handleColorChangeYellow = (e) => {
    setCurrentColor("yellow");
    };

    const handleColorChangeRed = (e) => {
    setCurrentColor("red");
    };

    const handleColorChangeErase = (e) => {
    setCurrentColor("white");
    };

    const saveIt = (arrayOfStrokeData) => {

        let exampleData = []
        for(let i=0;i<arrayOfStrokeData.length;i+=2){
        let split = arrayOfStrokeData[i].split(",")
        let stroke = {
        start_stroke: arrayOfStrokeData[i],
        line_path: arrayOfStrokeData[i+1],
        drawing_id:split[5],
        layer_id:split[6]
        };

        exampleData.push(stroke);
        }
    
        fetch(
            "http://localhost:3000/strokes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ arrayOfStrokes: JSON.stringify(exampleData) }),
        }
        )
        .then(
            (r) => r.json()
            )
        .then(
            (data) => {console.log(data);}
        );
    }

    const handleColorChoice = () => {
        setToolbarDetailUnambiguous("colorwheel")
        setEraseState(false)
        console.log(toolbarDetailUnambiguous)
    }

    const handleLineChoice = () => {
        setToolbarDetailUnambiguous("line")
        setEraseState(false)
        console.log(toolbarDetailUnambiguous)
    }

    const handleEraseChoice = () => {
        setToolbarDetailUnambiguous("erase")
        setEraseState(true)
        console.log(toolbarDetailUnambiguous)
    }

    
    const handleLayersChoice = () => {
        setToolbarDetailUnambiguous("layers")
        setEraseState(false)
    }

    const pageReload = () => {
        window.location.reload()
    }


    return (
        <>
            <CreateLayer drawingZ = {drawingZ} information = {information}/>
            <button className="layersbutton"  onClick={handleLayersChoice}>Layers</button> 
        <button className = "buttonInControls" onClick={(e)=>saveIt(superLongState)}>Save</button>
        <button id="color-wheel-button" onClick={handleColorChoice}>Choose Color</button> 
        <button id="draw-button" onClick={handleLineChoice}>Draw</button> 
        <button id="erase-button"  onClick={handleEraseChoice}>Erase</button> 
        {toolbarDetailUnambiguous ? <ToolBarDetail drawingZ = {drawingZ} information = {information} toolbarDetailUnambiguous={toolbarDetailUnambiguous} setCurrentColor={setCurrentColor} setEraseState={setEraseState} setCurrentWidth={setCurrentWidth} setToolbarDetailUnambiguous={setToolbarDetailUnambiguous}/> : null}
        <button onClick = {pageReload}>Back to Dashboard</button>
      {/* <button className = "buttonInControls" onClick={handleColorChangeBlack}>Black</button>
      <button className = "buttonInControls" onClick={handleColorChangeGreen}>Green</button>
      <button className = "buttonInControls" onClick={handleColorChangeYellow}>Yellow</button>
      <button className = "buttonInControls" onClick={handleColorChangeRed}>Red</button>
      <button className = "buttonInControls" onClick={handleColorChangeErase}>Erase</button> */}
      </>
    )
}

export default CanvasControls