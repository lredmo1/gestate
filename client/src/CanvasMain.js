import { useEffect, useRef, useState } from 'react'

function CanvasMain() {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const contextColor = useRef("red")
  const contextLineWidth = useRef(20)
  const contextLineCap = useRef("round")
  const contextBackgroundcolor = useRef("#d4fff6")

  console.log(contextColor)
  
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(()=>{
    const canvas = canvasRef.current
    canvas.style.backgroundColor = contextBackgroundcolor
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

  },[])

  const startPath = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    console.log(`This comes first: ${offsetX},${offsetY}`)

    setIsDrawing(true)
  }
  
  const drawPath = ({nativeEvent}) => {
    if(!isDrawing){
      return
    }
  const {offsetX, offsetY} = nativeEvent; 
  contextRef.current.lineTo(offsetX, offsetY)
  console.log(`This comes second: ${offsetX},${offsetY}`)
  contextRef.current.stroke()
  }

  const finishPath = ({nativeEvent}) => {
    contextRef.current.closePath()
    const {offsetX, offsetY} = nativeEvent; 
    console.log(`This comes third: ${offsetX},${offsetY}`)
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
