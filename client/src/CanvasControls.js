import { useState, useEffect } from "react";

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

    const handleSmallLine = (e) => {
    setCurrentWidth(1);
    };

    const handleMediumLine = (e) => {
    setCurrentWidth(5);
    };

    const handleLargeLine = (e) => {
    setCurrentWidth(10);
    };

    const handleExtraLargeLine = (e) => {
    setCurrentWidth(20);
    };

    const handleSuperLine = (e) => {
    setCurrentWidth(100);
    };

    const handleSuperErase = (e) => {
    setEraseState(true)
    }

    const handleSetIsDrawing = (e) => {
    setEraseState(false)
    }

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
      <button className = "buttonInControls" onClick={(e)=>saveIt(superLongState)}>Save</button>
      <button className = "buttonInControls" onClick ={handleSuperErase}>ERASE!</button>
      <button className = "buttonInControls" onClick ={handleSetIsDrawing}>Draw Again</button>
      <button className = "buttonInControls" onClick={handleColorChangeBlack}>Black</button>
      <button className = "buttonInControls" onClick={handleColorChangeGreen}>Green</button>
      <button className = "buttonInControls" onClick={handleColorChangeYellow}>Yellow</button>
      <button className = "buttonInControls" onClick={handleColorChangeRed}>Red</button>
      <button className = "buttonInControls" onClick={handleColorChangeErase}>Erase</button>
      <button className = "buttonInControls" onClick={handleSmallLine}>Small</button>
      <button className = "buttonInControls" onClick={handleMediumLine}>Medium</button>
      <button className = "buttonInControls" onClick={handleLargeLine}>Large</button>
      <button className = "buttonInControls" onClick={handleExtraLargeLine}>Extra Large</button>
      <button className = "buttonInControls" onClick={handleSuperLine}>Super</button>
      </>
    )
}

export default CanvasControls