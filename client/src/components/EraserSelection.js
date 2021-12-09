import SizeSelection from "./SizeSelection"


function LineSelection({setCurrentWidth, setEraseState}) {
    const handleSuperErase = (e) => {
        setEraseState(true)
        }

    return (
    <>
    <button className = "buttonInControls" onClick ={handleSuperErase}>ERASE!</button>
    <SizeSelection setCurrentWidth={setCurrentWidth}/>
    </>
    )
}

export default LineSelection

