import DrawingCard from "./DrawingCard";
import CanvasContainer from "./CanvasContainer";
import DrawingCardContainer from "./DrawingCardContainer";
import { useState, useEffect } from "react";

function DrawingContainer({ user }) {
  const [drawingZ, setDrawing] = useState("");
  const [canvasView, setCanvasView] = useState(false);

  let example = ["Mona Lisa", "Totoro"];



  return (
    <>
      {canvasView ? <CanvasContainer drawingZ = {drawingZ} user ={user} /> : <DrawingCardContainer user={user} setDrawing={setDrawing} setCanvasView={setCanvasView}/>}
    </>
  );
}

export default DrawingContainer;
