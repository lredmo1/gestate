import { useState, useEffect } from "react";
import LineSelection from "./LineSelection"
import EraserSelection from "./EraserSelection"
import ColorSelection from "./ColorSelection"

function CanvasControls({setCurrentColor, setCurrentWidth, setSuperLongState, setEraseState, superLongState}) {

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


    return (
        <>
        <LineSelection setCurrentWidth={setCurrentWidth} setEraseState={setEraseState}/>
        <EraserSelection setCurrentWidth={setCurrentWidth} setEraseState={setEraseState}/>
        <ColorSelection setCurrentColor={setCurrentColor}/>
      <button className = "buttonInControls" onClick={(e)=>saveIt(superLongState)}>Save</button>
      {/* <button className = "buttonInControls" onClick={handleColorChangeBlack}>Black</button>
      <button className = "buttonInControls" onClick={handleColorChangeGreen}>Green</button>
      <button className = "buttonInControls" onClick={handleColorChangeYellow}>Yellow</button>
      <button className = "buttonInControls" onClick={handleColorChangeRed}>Red</button>
      <button className = "buttonInControls" onClick={handleColorChangeErase}>Erase</button> */}
      </>
    )
}

export default CanvasControls