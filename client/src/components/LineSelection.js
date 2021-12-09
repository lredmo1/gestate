import SizeSelection from "./SizeSelection"


function LineSelection({setCurrentWidth, setEraseState}) {
    const handleSetIsDrawing = (e) => {
        setEraseState(false)
        }

    return (
    <>
    <button className = "buttonInControls" onClick ={handleSetIsDrawing}>Draw Again</button>
    <SizeSelection setCurrentWidth={setCurrentWidth}/>
    </>
    )
}

export default LineSelection