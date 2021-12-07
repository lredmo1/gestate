import { useEffect, useRef, useState } from 'react'

function CanvasMain({currentColor, currentWidth}) {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const redrawContextRef = useRef(null)
  const contextColor = useRef("purple")
  const contextLineWidth = useRef(10)
  const contextLineCap = useRef("round")
  const contextBackgroundcolor = useRef("#d4fff6")
  const contextOpacity = useRef(1)

    
  const [isDrawing, setIsDrawing] = useState(false)


  useEffect(()=>{

    fetch("http://localhost:3000/strokes")
      .then((r)=> r.json())
      .then((data)=> {
        redrawStrokes(data)
      })

    const canvas = canvasRef.current
    canvas.style.backgroundColor = contextBackgroundcolor.current
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`

    const ctx = canvas.getContext("2d")
    ctx.scale(2,2)
    ctx.lineCap = contextLineCap.current
    ctx.strokeStyle = contextColor.current
    ctx.lineWidth = contextLineWidth.current
    contextRef.current = ctx;

    const redraw = (drawingArray) => {

      let fullStrokeStart = drawingArray.start_stroke
      let fullStrokeMiddle = drawingArray.line_path
    
    
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
    }
    
    const redrawStrokes = (arrayl) => {
      for (let i = 0; i < arrayl.length; i++) {
        redraw(arrayl[i])
      }
    }

  },[])

  let fullStrokeStart = [] 
  let fullStrokeDraw = [] 
  let fullStrokeEnd = []
  let fullDrawing = []


  const startPath = ({nativeEvent}) => {
    contextRef.current.strokeStyle = currentColor
    contextRef.current.lineWidth = currentWidth
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    fullStrokeStart.push(offsetX, offsetY, contextRef.current.strokeStyle,  contextRef.current.lineWidth, contextRef.current.globalAlpha)
    let startStrokeB = fullStrokeStart.join(",")
    console.log(startStrokeB)
    setIsDrawing(true)
  }
  
  const drawPath = ({nativeEvent}) => {
    if(!isDrawing){
      return
    }
  const {offsetX, offsetY} = nativeEvent; 
  contextRef.current.lineTo(offsetX, offsetY)
  fullStrokeDraw.push(offsetX, offsetY)
  contextRef.current.stroke()
  }

  const finishPath = ({nativeEvent}) => {
    console.log(fullStrokeDraw.join(","))
    contextRef.current.closePath()
    const {offsetX, offsetY} = nativeEvent; 
    // fullStrokeEnd.push(offsetX, offsetY)
    // fullDrawing.push([startStrokeB,fullStrokeDraw])
    console.log(fullDrawing)
    setIsDrawing(false)
  }
  



  

 
  return (
   <canvas
    onMouseDown = {startPath}
    onMouseUp = {finishPath}
    onMouseMove = {drawPath}
    ref = {canvasRef}
    className = "canvasMain"

    />
  );
}

export default CanvasMain;



















