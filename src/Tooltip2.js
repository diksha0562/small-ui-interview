import { useState, useEffect, useRef  } from "react";
const Tooltip2 = ({content, children})=>{
    const [isActive, setActive] = useState();

    const [tooltipCoord, setCoord] = useState({top: 0, left: 0})
    const parentRef = useRef();
    const tooltipRef = useRef();

    useEffect(()=>{
        
      

        let pos = calcPosition();
        setCoord({left: pos.left, top: pos.top})

        
       
    },[isActive])


    const handleMouseEnter = ()=>{
        setActive(true)
    }

    const handleMouseLeave = ()=>{
        setActive(false)
    }

    function calcPosition(){
        const height = tooltipRef?.current?.getBoundingClientRect()?.height;
        const windowHeight = window.innerHeight;
        const parentRect = parentRef.current.getBoundingClientRect();
        console.log('parentRect.y', parentRect.y)
        const withInWindow = (parentRect.y + parentRect.height + (height||0)) < windowHeight;
        const coord = {
            top: withInWindow ?  parentRect.height : - (height||0),
            left: parentRect.left
        }

        return coord
    }


    let {left, top} = tooltipCoord



    return (<div ref={parentRef} className="tootlTipWrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div >{children}</div>
        {isActive && <div className="tooltipContent" ref={tooltipRef} style={{left, top}}>{content}</div>}
    </div>)



}
export default Tooltip2;