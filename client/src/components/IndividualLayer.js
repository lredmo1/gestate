import { useState } from "react"

function IndividualLayer({drawingZ, layer,information}) {
let zebra = layer.split(",")

 const handleLayerSelection = () =>{
  
 const newZIndex = () => {
  if(information.length === 0){
   return 1
  }else{
    return information.map(data=>{return data.split(",")[1]})
  }
}

const newNewZIndex = (newZIndex) => {
  if(newZIndex === 1){
    return 1
  } else {
    return Math.max(...newZIndex)+1
  }
}


     let layerIdZ = (layer.split(",")[2])
     let layerColor = (layer.split(",")[0])
     let layerName = (layer.split(",")[3])

     fetch(`/drawings/${drawingZ}/layers/${layerIdZ}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          position: 10,
          drawing_id: drawingZ,
          information: `${layerColor},${newNewZIndex(newZIndex())}`,
          name:layerName
        }),
      })   .then((r)=> r.json())
          .then((layer)=>console.log(layer))
    
        window.location.reload()
    }


//(position: integer, drawing_id: integer, information: string, name: string) 

    return (
    <button onClick = {handleLayerSelection}>{zebra.slice(-1)}</button>
    )
}

export default IndividualLayer