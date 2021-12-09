function SizeSelection({setCurrentWidth, setToolbarDetailUnambiguous}) {

    const handleSmallLine = (e) => {
        setCurrentWidth(1);
        setToolbarDetailUnambiguous(false);
    };
    
    const handleMediumLine = (e) => {
        setCurrentWidth(5);
        setToolbarDetailUnambiguous(false);
    };
    
    const handleLargeLine = (e) => {
        setCurrentWidth(20);
        setToolbarDetailUnambiguous(false);
    };
    
    const handleExtraLargeLine = (e) => {
        setCurrentWidth(60);
        setToolbarDetailUnambiguous(false);
    };
    
    const handleSuperLine = (e) => {
        setCurrentWidth(100);
        setToolbarDetailUnambiguous(false);
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