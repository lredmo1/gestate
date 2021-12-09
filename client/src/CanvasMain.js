import { useEffect, useRef, useState } from 'react'

function CanvasMain({informationreDraw, drawingZ, inform, eraseState, setEraseState, currentColor, currentWidth, setSuperLongState, superLongState}) {

  const canvasRef = useRef(null)
  const canvasRef2 = useRef(null)
  const contextRef = useRef(null)
  const redrawContextRef = useRef(null)
  const contextColor = useRef("purple")
  const contextLineWidth = useRef(10)
  const contextLineCap = useRef("round")
  const contextBackgroundcolor = useRef("#d4fff6")
  const contextBackgroundcolor2 = useRef("#d4fff6")
  const contextOpacity = useRef(1)
  

  const [counter,setcounter] =useState(0)
  const [isDrawing, setIsDrawing] = useState(false)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [isActuallyErasing,setIsActuallyErasing] = useState(false)

  let fullStrokeStart = [] 
  let fullStrokeDraw = [] 
  let fullStrokeEnd = []
  let StartStrokeFull = []
  let LinePathFull = []

  let canvasInformation = inform.split(",")
 
  

  useEffect(()=>{

 

      //backgroundColor,width,height,style.width,style.height,position,left,top,[z-index]

    const canvas = canvasRef.current
    canvas.style.backgroundColor = canvasInformation[0]
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`
    // canvas.style.position = `absolute`
    // canvas.style.left = 0
    // canvas.style.top = 10
    canvas.style['z-index'] = canvasInformation[1]

  

    const ctx = canvas.getContext("2d")
    ctx.scale(2,2)
    ctx.lineCap = contextLineCap.current
    ctx.strokeStyle = contextColor.current
    ctx.lineWidth = contextLineWidth.current
    contextRef.current = ctx;

    const redraw = (drawingArray) => {

      let fullStrokeStart = drawingArray.start_stroke
      let fullStrokeMiddle = drawingArray.line_path

      if (fullStrokeStart === 'erase'){
        const eraseReDraw = (fullStrokeMiddle) => {
          let split = fullStrokeMiddle.split(",")
          for (let i = 0; i < split.length; i += 4) {
            contextRef.current.clearRect(parseInt(split[i]), parseInt(split[i + 1]), parseInt(split[i+2]), parseInt(split[i + 3]))
          }      
        }
        eraseReDraw(fullStrokeMiddle)
      } else {
    
      const startPathRedraw = (fullStrokeStart) => { 
        setIsDrawing(true)
        let splitFullStrokeStart = fullStrokeStart.split(",")
        contextRef.current.strokeStyle = splitFullStrokeStart[2]
        contextRef.current.lineWidth = splitFullStrokeStart[3]
        contextRef.current.beginPath()
        contextRef.current.moveTo(parseInt(splitFullStrokeStart[0]), parseInt(splitFullStrokeStart[1]))
      }
      
      const drawPathRedraw = (fullStrokeMiddle) => {
        let split = fullStrokeMiddle.split(",")
        for (let i = 0; i < split.length; i += 2) {
          contextRef.current.lineTo(parseInt(split[i]), parseInt(split[i + 1]))
        }    
        contextRef.current.stroke()  
      }
    
      const finishPathRedraw = () => {
        contextRef.current.closePath()
        setIsDrawing(false)
      }
      startPathRedraw(fullStrokeStart) 
      drawPathRedraw(fullStrokeMiddle)
      finishPathRedraw()
    }}
    
    const redrawStrokes = (arrayl) => {
      for (let i = 0; i < arrayl.length; i++) {

        redraw(arrayl[i])  
      }
    }

    fetch(`http://localhost:3000/drawings/${drawingZ}/layers/${canvasInformation[2]}`)
    .then((r)=> r.json())
    .then((layer)=>redrawStrokes(layer.strokes))




  },[])

  const startPath = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent;
    if(eraseState === false){
    contextRef.current.strokeStyle = currentColor
    contextRef.current.lineWidth = currentWidth
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    fullStrokeStart.push(offsetX, offsetY, contextRef.current.strokeStyle,  contextRef.current.lineWidth, contextRef.current.globalAlpha)
    let StartStrokeSingleStroke = fullStrokeStart.join(",")
    StartStrokeFull.push(StartStrokeSingleStroke)
    setSuperLongState((dog)=> [...dog,StartStrokeSingleStroke])
    setIsDrawing(true)
    setcounter((count)=>count+=1)}
    else {
      setIsActuallyErasing(true)
      setSuperLongState((dog)=> [...dog,"erase"])
    }
  }
  

  const drawPath = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent;
    if(eraseState === false){
    if(!isDrawing){
      return
    }
    contextRef.current.lineTo(offsetX, offsetY)
    fullStrokeDraw.push(offsetX, offsetY)
    contextRef.current.stroke()
  }else if (isActuallyErasing === true){
    contextRef.current.clearRect(offsetX, offsetY, 100, 100);
    fullStrokeDraw.push(offsetX, offsetY, 100, 100)
  } else {
    
  }}

  const finishPath = ({nativeEvent}) => {
    if(eraseState === false){
    contextRef.current.closePath()
    const {offsetX, offsetY} = nativeEvent; 
    fullStrokeEnd.push(offsetX, offsetY)
    let linePathSingleStroke = fullStrokeDraw.join(",")
    if(linePathSingleStroke.length === 0){
    setSuperLongState((dog)=> [...dog,`WOW`])}
    else{
      setSuperLongState((dog)=> [...dog,linePathSingleStroke])
    }
    LinePathFull.push(linePathSingleStroke)
    setIsDrawing(false)
  }else{
    let linePathSingleStroke = fullStrokeDraw.join(",")
    setSuperLongState((dog)=> [...dog,linePathSingleStroke])
    setIsActuallyErasing(false)
  }}


  const handleSuperErase = (e) => {
    setEraseState(true)
  }

  const handleSetIsDrawing = (e) => {
    setEraseState(false)
  }

  return (
    <>
  <canvas
    onMouseDown = {startPath}
    onMouseUp = {finishPath}
    onMouseMove = {drawPath}
    ref = {canvasRef}
    className = "canvasMain"
    />
    </>
  );
}

export default CanvasMain;



















