import LineSelection from "./LineSelection"
import EraserSelection from "./EraserSelection"
import ColorSelection from "./ColorSelection"
import LayerSelection from "./LayerSelection"

function ToolBarDetail({information, toolbarDetailUnambiguous, setCurrentWidth, setEraseState, setCurrentColor, setToolbarDetailUnambiguous}) {
console.log(information)

    let render = () => {
    if (toolbarDetailUnambiguous === "line") {
       return <LineSelection setCurrentWidth={setCurrentWidth} setEraseState={setEraseState} setToolbarDetailUnambiguous={setToolbarDetailUnambiguous}/>
    } else if (toolbarDetailUnambiguous === "erase") {
        return <EraserSelection setCurrentWidth={setCurrentWidth} setEraseState={setEraseState} setToolbarDetailUnambiguous={setToolbarDetailUnambiguous}/>
    } else if (toolbarDetailUnambiguous === "colorwheel") {
        return <ColorSelection setCurrentColor={setCurrentColor} setToolbarDetailUnambiguous={setToolbarDetailUnambiguous}/>
    } else if  (toolbarDetailUnambiguous === "layers"){
        return <LayerSelection information ={information}/>
    }
}

    return (
    <>
    {render()}
    </>

    )
}

export default ToolBarDetail