function DrawingCard({drawing, setDrawing, setCanvasView}) {

    const handleClick = (e) => {
        setCanvasView(true)
        setDrawing(drawing.id)
        console.log('hello')
        console.log(drawing.id)
    }

    return (
    <div>
    <h1 onClick={handleClick}>{drawing.name}</h1>
    </div>
    )
}

export default DrawingCard