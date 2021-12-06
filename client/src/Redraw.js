
let exampleArray = {"start_stroke":"zack", "line_path":"wnmasjdklnf"}


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

console.log(redraw(exampleArray))