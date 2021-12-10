import { useHistory } from "react-router-dom";

function DrawingCard({drawing, setDrawing, setCanvasView, setDisappearOfArtistPage}) {
    let history = useHistory();

    const handleClick = (e) => {
        setCanvasView(true)
        setDrawing(drawing.id)
        setDisappearOfArtistPage(false)
        // history.push("/dashboard/yourdrawing")
    }

    return (
    <div className="drawingCard">
    <h1 onClick={handleClick}>{drawing.name}</h1>
    </div>
    )
}

export default DrawingCard