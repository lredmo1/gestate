import LineSelection from "./LineSelection"
import EraserSelection from "./EraserSelection"
import ColorSelection from "./ColorSelection"

function ToolBarDetail({toolbarDetailUnambiguous, setCurrentWidth, setEraseState, setCurrentColor, setToolbarDetailUnambiguous}) {
let render = () => {
    if (toolbarDetailUnambiguous === "line") {
       return <LineSelection setCurrentWidth={setCurrentWidth} setEraseState={setEraseState} setToolbarDetailUnambiguous={setToolbarDetailUnambiguous}/>
    } else if (toolbarDetailUnambiguous === "erase") {
        return <EraserSelection setCurrentWidth={setCurrentWidth} setEraseState={setEraseState} setToolbarDetailUnambiguous={setToolbarDetailUnambiguous}/>
    } else if (toolbarDetailUnambiguous === "colorwheel") {
        return <ColorSelection setCurrentColor={setCurrentColor} setToolbarDetailUnambiguous={setToolbarDetailUnambiguous}/>
    }
}

    return (
    <>
    {render()}
    </>

    )
}

export default ToolBarDetail