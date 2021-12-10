import DrawingCard from "./DrawingCard";
import CanvasContainer from "./CanvasContainer";
import DrawingCardContainer from "./DrawingCardContainer";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

function DrawingContainer({ user, setDisappearOfArtistPage }) {
  const [drawingZ, setDrawing] = useState("");
  const [canvasView, setCanvasView] = useState(false);

  let example = ["Mona Lisa", "Totoro"];



  return (
    <>
      {/* <Switch>
        <Route exact path="/dashboard/drawing">
        <CanvasContainer drawingZ = {drawingZ} user ={user} />
        </Route>
      </Switch> */}
      {canvasView ? <CanvasContainer drawingZ = {drawingZ} user ={user} /> : <DrawingCardContainer setDisappearOfArtistPage ={setDisappearOfArtistPage}  user={user} setDrawing={setDrawing} setCanvasView={setCanvasView}/>}
    </>
  );
}

export default DrawingContainer;
