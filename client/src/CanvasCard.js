function CanvasCard() {
    return (
        <>
    <h1>CanvasCard</h1>
    <CanvasMain currentColor={contextColor} setSuperLongState = {setSuperLongState} superLongState ={superLongState} currentWidth={lineWidth}/>
      <button onClick ={handleColorChangeBlack}>Black</button>
      <button onClick={handleColorChangeGreen}>Green</button>
      <button onClick={handleColorChangeYellow}>Yellow</button>
      <button onClick={handleColorChangeRed}>Red</button>
      <button onClick={handleColorChangeErase}>Erase</button>
      <button onClick={handleSmallLine}>Small</button>
      <button onClick={handleMediumLine}>Medium</button>
      <button onClick={handleLargeLine}>Large</button>
      <button onClick={handleExtraLargeLine}>Extra Large</button>
      <button onClick={handleSuperLine}>Super</button>
      <button onClick={(e)=>saveIt(superLongState)}>Save</button>
    </>
    )
}

export default CanvasCard