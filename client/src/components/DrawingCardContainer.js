import DrawingCard from "./DrawingCard"

function DrawingCardContainer({user, setDrawing, setCanvasView, setDisappearOfArtistPage = {setDisappearOfArtistPage}}) {
  console.log(user)
  let drawingCards = user.drawings.map((drawing) => (
    <DrawingCard
      key={drawing.id}
      setDisappearOfArtistPage = {setDisappearOfArtistPage}
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
