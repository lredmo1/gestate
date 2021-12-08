function DrawingCard({drawing, user, setDrawing, setCanvasView}) {
    const handleClick = (e) => {
        setCanvasView(true)
        setDrawing(drawing.id)
    }

    return (
    <div onClick = {handleClick}>
    <h1>{drawing.name}</h1>
    <h1>Color</h1>
    </div>
    )
}

export default DrawingCard