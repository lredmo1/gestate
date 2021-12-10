function ColorCard({color, setCurrentColor, setToolbarDetailUnambiguous}) {

    function test(e) {
        setCurrentColor(`#${color}`)
        setToolbarDetailUnambiguous(false)
    }

    return (
    <>
    <div style={{backgroundColor: `#${color}`}}className="color-card" onClick={test}></div>
    </>
    )
}

export default ColorCard