function ColorCard({color, setCurrentColor}) {

    function test() {
        console.log("hello")
        setCurrentColor(color)
    }

    return (
    <>
    <div className="color-card" onClick={test}>{color}</div>
    
    </>
    )
}

export default ColorCard