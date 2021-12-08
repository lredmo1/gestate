import CanvasMain from "./CanvasMain"

function CanvasGenerator({setEraseState,eraseState,currentColor,currentWidth,setSuperLongState,superLongState}) {

    //backgroundColor,width,height,style.width,style.height,position,left,top,[z-index]
    //REMEMBER TO TALK ABOUT Z INDEX AND ABSOLUTE AND REMOVE THE BACKGROUND COLOR
    let informationForCanvas = ["#FFE3DA,10,absolute","#B9FDFF,2,absolute","#C8FFC9,1,absolute"]
    let mapOfinformation = informationForCanvas.map((inform)=><CanvasMain inform ={inform} setEraseState ={setEraseState} eraseState ={eraseState} currentColor={currentColor} currentWidth={currentWidth} setSuperLongState={setSuperLongState} superLongState={superLongState}/>)

    return (
        <>
        {mapOfinformation}
        </>
    )
}

export default CanvasGenerator