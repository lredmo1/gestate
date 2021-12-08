import DrawingCard from "./DrawingCard"

function DrawingCardContainer({user, setDrawing, setCanvasView}) {
  let drawingCards = user.drawings.map((drawing) => (
    <DrawingCard
      key={drawing.id}
      user={user}
      drawing={drawing}
      setDrawing={setDrawing}
      setCanvasView={setCanvasView}
    />
  ));
  return (
      <>
      { drawingCards }
      </>
      );
}

export default DrawingCardContainer;
