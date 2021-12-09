function ColorCard({color, setCurrentColor, setToolbarDetailUnambiguous}) {

    function test(e) {
        setCurrentColor(`#${color}`)
        setToolbarDetailUnambiguous(false)
    }

    return (
    <>
    <div className="color-card" onClick={test}>{color}</div>
    
    </>
    )
}

export default ColorCard