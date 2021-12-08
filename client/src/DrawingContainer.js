import DrawingCard from "./DrawingCard"

function DrawingContainer() {
  let example = ["Mona Lisa","Totoro"]
  
  let drawingcards = example.map((drawing)=><DrawingContainer drawing = {drawing} />)

  return (
    <>
  {drawingcards}
  </>
  )
}

export default DrawingContainer