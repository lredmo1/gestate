function DrawingCard({drawing, setDrawing, setCanvasView, setDisappearOfArtistPage}) {

    const handleClick = (e) => {
        setCanvasView(true)
        setDrawing(drawing.id)
        setDisappearOfArtistPage(false)
    }

    return (
    <div className="drawingCard">
    <h1 onClick={handleClick}>{drawing.name}</h1>
    </div>
    )
}

export default DrawingCard