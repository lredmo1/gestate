import ColorCard from "./ColorCard"

function ColorSelection({setCurrentColor}) {
    const colors = ["F9EBEA","A3E4D7","FAD7A0","DC7633","17202A","FDFEFE"]
    let colorWheel = colors.map((color)=><ColorCard color={color} setCurrentColor={setCurrentColor}/>)
    
    return (
    <>
    {colorWheel}
    </>
    )
}

export default ColorSelection