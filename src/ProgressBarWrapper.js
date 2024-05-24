import ProgressBar from './ProgressBar';

const ProgressBarWrapper = ({numOfBars, setNumOfBars})=>{
    console.log('numOfBars',numOfBars);
    return (
        <div>
            {
                numOfBars.map((fillPerc, idx)=>{
                   return <ProgressBar key={idx} fillPerc={fillPerc} />
                })
            }
        </div>
    )
}

export default ProgressBarWrapper