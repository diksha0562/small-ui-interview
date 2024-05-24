import { useState, useEffect } from "react"

const Carousel = ({items, duration})=>{
    const [currIdx, setCurrIdx] = useState(0);
    const [isMoving, setMoving] = useState(false);

    const handleNext = ()=>{
        setMoving(true)
        setCurrIdx((currIdx+1)%items.length)
    }

    const handlePrev = ()=>{
        setMoving(true)
        setCurrIdx((currIdx-1 + items.length)%items.length)
    }

    useEffect(()=>{
        let timeout = null;
        if(isMoving){
            timeout = setTimeout(()=>{
                setMoving(false)
            }, duration)
        }

        return ()=>{
            clearTimeout(timeout)
        }
    })

    const prev = (currIdx-1 + items.length)%items.length;
    const next = (currIdx+1)%items.length;

    return (
        <div className="carouselWrapper">
            <div className="carousel">
                {
                    items.map((item, idx)=><img src={item} key={idx} className={`carouselImg ${idx===prev ? 'imgPrev': ""} ${idx===currIdx ? 'imgActive': ""} ${idx === next ? 'imgNext': ""}`}/>)
                }

            </div>
            <button onClick={handlePrev} disabled={isMoving} className="prevBtn">&lt;</button>
            <button onClick={handleNext} disabled={isMoving} className="nextBtn">&gt;</button>

        </div>
    )

}

export default Carousel