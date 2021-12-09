import DrawingCard from "./DrawingCard"

function DrawingCardContainer({user, setDrawing, setCanvasView}) {
  console.log(user)
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
      {drawingCards}
      </>
      );
}

export default DrawingCardContainer;
