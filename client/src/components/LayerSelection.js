import IndividualLayer from "./IndividualLayer"

function LayerSelection({information}) {
    console.log(information)
    let layerButtons = information.map((layer)=><IndividualLayer information ={information} layer={layer} />)

    return (
    <h1>{layerButtons}</h1>
    )
}

export default LayerSelection