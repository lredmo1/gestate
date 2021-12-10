function IndividualLayer({layer,information}) {
let zebra = layer.split(",")

let layerIndex = information.map(data=>{return data.split(",")[1]})



//   console.log(!!pleasework)

const newIndexZ = () => {return Math.max(...layerIndex)+1}
console.log(newIndexZ())

 const handleLayerSelection = () =>{
     console.log("hello")
 }
    return (
    <button onClick = {"hello"}>{zebra.slice(-1)}</button>
    )
}

export default IndividualLayer