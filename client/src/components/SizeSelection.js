function SizeSelection({setCurrentWidth}) {

    const handleSmallLine = (e) => {
        setCurrentWidth(1);
    };
    
    const handleMediumLine = (e) => {
        setCurrentWidth(5);
    };
    
    const handleLargeLine = (e) => {
        setCurrentWidth(20);
    };
    
    const handleExtraLargeLine = (e) => {
        setCurrentWidth(60);
    };
    
    const handleSuperLine = (e) => {
        setCurrentWidth(100);
    };

    return (
        <>
        <button className = "buttonInControls" onClick={handleSmallLine}>Small</button>
        <button className = "buttonInControls" onClick={handleMediumLine}>Medium</button>
        <button className = "buttonInControls" onClick={handleLargeLine}>Large</button>
        <button className = "buttonInControls" onClick={handleExtraLargeLine}>Extra Large</button>
        <button className = "buttonInControls" onClick={handleSuperLine}>Super</button>
        </>
    )
}

export default SizeSelection