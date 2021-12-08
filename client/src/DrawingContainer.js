import DrawingCard from "./DrawingCard";
import CanvasContainer from "./CanvasContainer";
import DrawingCardContainer from "./DrawingCardContainer";
import { useState, useEffect } from "react";

function DrawingContainer({ user }) {
  const [drawing, setDrawing] = useState("");
  const [canvasView, setCanvasView] = useState(false);

  let example = ["Mona Lisa", "Totoro"];



  return (
    <>
      {canvasView ? <CanvasContainer /> : <DrawingCardContainer user={user} setDrawing={setDrawing} setCanvasView={setCanvasView}/>}
    </>
  );
}

export default DrawingContainer;
