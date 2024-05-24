const ProgressBar = ({fillPerc})=>{
    console.log('numOfBars',fillPerc);
    return (<div className="bar-container">
        <div className="bar" style={{transform: `scaleX(${fillPerc/100})`}}></div>
    </div>)
}

export default ProgressBar;