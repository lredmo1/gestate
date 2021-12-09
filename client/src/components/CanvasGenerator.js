import CanvasMain from "./CanvasMain"
import { useEffect,useState } from "react"

function CanvasGenerator({user, drawingZ, setEraseState,eraseState,currentColor,currentWidth,setSuperLongState,superLongState}) {


    const [information,setInformation] = useState([])
    const [informationreDraw,setInformationReDraw] = useState([])
   
    //  setSuperLongState((dog)=> [...dog,linePathSingleStroke])

    useEffect(()=>{
        fetch(`http://localhost:3000/drawings/${drawingZ}`)
        .then((r)=> r.json())
        .then((drawing)=> drawing.layers.forEach((layer)=>setInformation((dog)=> [...dog,`${layer.information},${layer.id}`])
        ))
    },[])

    let mapOfinformation = information.map((inform,index)=><CanvasMain drawingZ = {drawingZ} inform ={inform} setEraseState ={setEraseState} eraseState ={eraseState} currentColor={currentColor} currentWidth={currentWidth} setSuperLongState={setSuperLongState} superLongState={superLongState}/>)

    return (
        <>
        {mapOfinformation}
        </>
    )
}

export default CanvasGenerator