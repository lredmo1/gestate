import IndividualLayer from "./IndividualLayer"

function LayerSelection({information, drawingZ}) {
    console.log(information)
    let layerButtons = information.map((layer)=><IndividualLayer drawingZ ={drawingZ} information ={information} layer={layer} />)

    return (
    <h1>{layerButtons}</h1>
    )
}

export default LayerSelection