function DrawingCard({drawing}) {
    const handleClick = () => {
        console.log('hello')
    }

    return (
    <div onclick = {handleClick}>
    <h1>{drawing.name}</h1>
    <h1>Color</h1>
    </div>
    )
}

export default DrawingCard