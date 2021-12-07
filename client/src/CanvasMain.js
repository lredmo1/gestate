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
  const [counter,setcounter] =useState(0)
  const [superLongState, setSuperLongState] = useState([])

    
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
  let StartStrokeFull = []
  let LinePathFull = []
  
  



  const startPath = ({nativeEvent}) => {
    contextRef.current.strokeStyle = currentColor
    contextRef.current.lineWidth = currentWidth
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    fullStrokeStart.push(offsetX, offsetY, contextRef.current.strokeStyle,  contextRef.current.lineWidth, contextRef.current.globalAlpha)
    let StartStrokeSingleStroke = fullStrokeStart.join(",")
    StartStrokeFull.push(StartStrokeSingleStroke)
    // setSuperLongState((dog)=> dog + StartStrokeSingleStroke)
    setSuperLongState((dog)=> [...dog, StartStrokeSingleStroke])

    //setSuperLongState => ({...SuperLongState, StartStrokeSingleStroke})) 
    // console.log(`this is fullStrokeStart ${fullStrokeStart}`)
    console.log(StartStrokeFull)
    // console.log(`this is the joined ${StartStrokeSingleStroke}`)
    setIsDrawing(true)

    setcounter((count)=>count+=1)
    console.log(`this is the count inside ${counter}`)
  }

  console.log(superLongState)

  // console.log(`this is the outside one ${LinePathFull}`)
  
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
    contextRef.current.closePath()
    const {offsetX, offsetY} = nativeEvent; 
    fullStrokeEnd.push(offsetX, offsetY)
    let linePathSingleStroke = fullStrokeDraw.join(",")
    console.log(linePathSingleStroke.length)
    if(linePathSingleStroke.length === 0){
    setSuperLongState((dog)=> [...dog,`WOW`])}
    else{
      setSuperLongState((dog)=> [...dog,linePathSingleStroke])
    }
    // setSuperLongState((dog)=> dog + linePathSingleStroke + ",WOW")
    // setSuperLongState((dog)=>dog.push(linePathSingleStroke))
    LinePathFull.push(linePathSingleStroke)
  
    setIsDrawing(false)
  }

  

  //633,485,#ff0000,5,1

//"633,486,633,487,633,488,633,489,633,490,633,491,633,492,633,493,633,494,632,495,632,496,632,497,632,498,632,499,631,500,631,501,631,502,631,504,631,505,631,506,631,507,630,507,630,508,630,509,630,510,630,511,629,512,629,513,629,514,629,515,629,517,629,518,629,519,629,520,629,521,629,523,629,524,628,524,628,525,628,526,628,527,628,529,627,531,627,532,627,533,627,534,627,535,627,536,627,537,627,538,627,539,627,540,626,541,626,542,626,543,626,544,626,545,626,546,626,547,626,546,626,545,626,544,626,543,626,542,626,541,626,540,626,539,626,538,626,537,627,536,627,535,627,534,627,533,627,532,628,530,628,529,628,528,628,527,629,526,629,524,630,522,630,521,630,520,630,519,630,518,631,518,631,517,631,516,631,515,632,515,632,514,632,513,632,512,632,511,632,510,633,509,633,508,634,507,634,506,634,505,634,504,634,503,634,502,634,501,634,500,635,499,635,498,635,497,635,496,636,495,636,494,636,493,636,492,636,491,636,490,637,489,637,488,637,487,637,486,638,485,638,484,638,483,638,482,638,481,638,480,638,479,638,478,638,477,638,476,638,475,638,474,638,473,639,473,640,473,641,473,642,473,643,473,644,473,645,473,646,473,647,473,648,473,649,473,650,473,651,473,652,473,653,473,654,473,655,473,656,473,657,473,658,473,659,473,660,473,661,473,662,473,663,473,664,473,665,473,666,473,667,473,667,472,668,472,670,472,671,472,672,472,673,472,674,472,675,472,676,472,677,472,678,472,679,472,680,472,681,472,683,472,684,472,685,472,686,472,687,472,688,472,689,472,690,472,691,472,692,472,693,472,694,472,695,472,697,472,698,472,700,472,701,472,702,472,703,472,705,472,706,472,707,472,708,472,709,471,710,471,711,471,712,471,713,471,714,471,715,471,716,471,717,471,718,471,719,471,720,471,721,471,721,470,722,470,723,470,724,470,725,470,726,470,727,470,728,469,729,469,730,469,730,470,730,471,730,472,729,472,729,473,729,474,729,475,729,476,728,476,728,477,728,478,728,479,728,480,728,481,727,482,727,483,727,484,726,484,726,485,726,486,726,487,726,488,726,489,726,490,726,491,726,492,725,492,725,493,725,495,724,495,724,496,724,497,724,498,724,499,724,500,724,501,724,502,724,503,723,504,723,505,723,506,723,507,723,508,723,509,722,509,722,510,722,511,722,513,722,514,722,515,722,516,722,517,722,518,722,519,722,520,722,521,722,522,721,522,720,523,720,524,720,525,720,526,720,527,720,528,720,529,720,530,720,531,720,532,720,533,720,534,720,535,720,536,720,537,720,538,720,539,720,540,719,542,719,543,719,544,719,545,718,545,718,546,718,547,718,548,718,549,718,550,718,551,718,552,718,553,718,554,718,555,718,556,717,556,716,556,715,556,714,556,713,556,712,556,711,556,710,556,709,556,709,555,708,555,707,555,706,555,706,554,705,554,705,553,704,553,703,553,702,553,701,553,700,553,699,553,698,552,697,552,696,552,696,551,695,551,694,551,693,551,692,551,691,551,691,550,690,550,689,550,688,550,687,550,686,550,685,549,684,549,683,549,682,549,681,549,680,549,679,549,678,549,677,549,676,549,675,549,674,549,673,549,672,549,671,549,670,549,669,549,668,549,668,548,667,548,667,547,666,547,665,547,664,547,663,547,662,547,661,547,660,547,659,547,658,547,657,547,656,547,655,547,654,547,653,547,652,547,651,547,650,547,649,547,648,547,647,547,646,547,645,547,644,547,643,547,642,547,641,547,640,547,639,547,638,547,637,547,636,547,635,547,634,547,633,547,632,547,631,547,630,547,629,547,628,547,627,547,626,547,625,547,624,547,624,548,623,548,622,548,621,548,620,548,621,548,621,547"
let test1 = ["633,485,#ff0000,5,1"]
//868,574,#ffff00,100,1
 

  let test2 = ['868,574,#ffff00,100,1','867,574,866,574,865,574,864,574,864,575,864,576,864,577,863,578,862,579,862,580,861,581,860,582,860,583,859,583,859,584,859,585,858,585,858,586,858,587,857,588,857,589,856,590,855,591,855,592,855,593,855,594,854,594,854,595,853,596,853,597,853,598,852,599,852,600,851,602,851,603,851,604,851,605,850,605,850,606,850,607,849,607,849,608,849,609,849,610,849,611,849,612,849,613,849,614,848,614,848,615,847,616,847,617,847,618,847,619,847,620,846,621,846,623,846,624,845,625,844,626,844,627,844,628,844,630,844,631,843,631,843,632,843,633,842,635,842,636,842,638,842,640,842,641,842,643,842,644,841,644,841,645,841,646,841,647,841,648,841,649,841,650,841,652,841,653,841,654,841,655,841,657,841,659,841,660,841,663,841,664,841,665,841,666,841,667,841,669,841,670,842,671,842,672,842,673,842,674,843,674,843,675,843,676,843,677,843,678,844,679,845,680,845,681,846,681,846,682,847,682,847,683,848,683,849,683,850,683,850,684,851,685,852,685,852,686,853,686,854,686,855,686,856,687,857,687,859,687,860,687,860,688,861,688,861,689,862,689,863,689,864,689,865,689,866,689,867,689,869,690,870,690,871,690,873,691,874,691,876,691,877,691,878,691,880,691,882,691,883,691,884,691,886,691,887,691,888,691,889,691,890,691,891,691,893,691,894,691,895,691,897,692,898,692,900,692,901,692,902,692,903,692,904,692,905,692,906,692,907,692,908,692,909,692,910,692,911,692,912,692,912,691,913,691,914,691,915,691,916,691,918,692,919,692,920,692,921,692,922,692,923,692,924,692,925,692,926,692,927,692,928,692,929,692,930,692,931,692,932,692,933,692,934,692,935,691,936,691,936,690,937,690,939,689,941,689,942,688,942,687,943,687,945,687,946,686,946,685,947,684,948,684,949,684,949,682,950,682,951,682,952,680,952,679,953,679,955,679,955,678,957,677,958,676,959,675,959,674,960,674,961,673,962,672,962,671,963,670,964,670,964,669,965,667,966,667,967,667,967,666,969,664,969,663,970,662,971,662,972,660,972,659,973,658,974,657,974,656,975,655,976,655,976,654,977,652,977,651,978,650,979,649,979,648,980,647,980,646,981,645,982,643,983,642,984,641,984,640,984,639,984,638,984,637,984,636,985,635,986,634,986,633,986,631,986,630,986,629,987,628,987,627,987,625,987,624,987,623,987,622,987,621,987,620,987,619,987,618,987,617,987,616,987,615,987,614,987,613,987,612,987,611,987,610,987,609,987,608,987,607,987,606,987,605,986,605,986,604,986,603,985,603,985,602,984,601,983,601,983,600,982,600,982,599,981,599,980,598,979,598,979,597,978,597,977,597,977,596,976,596,976,595,975,595,974,595,973,594,972,594,971,594,970,594,969,593,968,593,967,593,966,593,966,592,965,592,964,592,963,592,962,592,961,592,960,592,959,592,958,592,957,592,957,591,956,591,955,590,954,590,953,590,952,590,951,590,950,590,949,590,948,590,947,590,946,590,945,590,944,590,943,590,942,590,942,589,941,589,940,589,939,589,938,589,937,589,936,589,935,589,934,589,933,589,932,589,931,589,930,589,929,589,928,589,927,589,926,589,925,589,924,589,923,589,922,589,921,589,920,589,919,589,918,589,918,590,918,591,917,591,916,591,915,591,914,592,914,593,913,593,912,593,911,593,911,594,910,594,910,595,909,595,908,595,908,596,907,596,906,596,905,596,905,597,903,597']
 
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



















