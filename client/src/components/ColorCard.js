function ColorCard({color, setCurrentColor}) {

    function test(e) {
        console.log("hello")
        setCurrentColor(`#${color}`)
        console.log(typeof(color))
    }

    return (
    <>
    <div className="color-card" onClick={test}>{color}</div>
    
    </>
    )
}

export default ColorCard