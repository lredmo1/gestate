import CanvasMain from "./CanvasMain";
import { useState } from "react";
import CanvasControls from "./CanvasControls";
import LayersControls from "./LayersControls";

function CanvasContainer() {
  const [currentColor, setCurrentColor] = useState("pink");
  const [currentWidth, setCurrentWidth] = useState(5);
  const [superLongState, setSuperLongState] = useState([]);
  // const [layers, setLayers] = useState([]);

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

  const saveIt = (arrayOfStrokeData) => {
    let exampleData = [];

    for (let i = 0; i < arrayOfStrokeData.length; i += 2) {
      let stroke = {
        start_stroke: arrayOfStrokeData[i],
        line_path: arrayOfStrokeData[i + 1],
        layer_id: 1,
      };
      exampleData.push(stroke);
    }

    fetch("http://localhost:3000/strokes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ arrayOfStrokes: JSON.stringify(exampleData) }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });

    window.location.reload();

    // useEffect(() => {
    //   fetch("http://localhost:3000/drawings/:id/layers")
    //     .then((resp) => resp.json())
    //     .then(data => setLayers(data));
    // }, []);

    // layerCard = layers.map((layer) => <LayerCard layer={layer}/>);
  };

  return (
    <>
      <CanvasControls />
      //move buttons to controls
      <button onClick={handleColorChangeBlack}>Black</button>
      <button onClick={handleColorChangeGreen}>Green</button>
      <button onClick={handleColorChangeYellow}>Yellow</button>
      <button onClick={handleColorChangeRed}>Red</button>
      <button onClick={handleColorChangeErase}>Erase</button>
      <button onClick={handleSmallLine}>Small</button>
      <button onClick={handleMediumLine}>Medium</button>
      <button onClick={handleLargeLine}>Large</button>
      <button onClick={handleExtraLargeLine}>Extra Large</button>
      <button onClick={handleSuperLine}>Super</button>
      <button onClick={(e) => saveIt(superLongState)}>Save</button>
      <LayersControls />
      <CanvasMain
        currentColor={currentColor}
        currentWidth={currentWidth}
        setSuperLongState={setSuperLongState}
        superLongState={superLongState}
      />
      ;
    </>
  );
}

export default CanvasContainer;
