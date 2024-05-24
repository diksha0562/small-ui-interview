import './App.css';
import { useState, useEffect, useRef } from 'react';
import Tooltip2 from './Tooltip2';
// import Carousel from './Carousel'
// import Tooltip from "./Tooltip";

// function App() {
//   const [timeElapsed, setTimeElapsed] = useState(0)
//   const [timerId, setTimerId] = useState();
//   const lastTick = useRef(0)

//   useEffect(()=>{
   


//     return ()=>{
//       clearInterval(timerId);
//       setTimerId(null)}

//   },[])

//   const handleToggle = ()=>{
//     if(timerId){
//       clearInterval(timerId);
//       setTimerId(null);
//       return
//     }

//     lastTick.current = Date.now();

//     let cloneT = setInterval(()=>{
//       setTimeElapsed((prevT)=>{
//         let duration = Date.now() - lastTick.current
//         return prevT+duration

//       })
//       lastTick.current = Date.now();
     
     
//     },1);

//     setTimerId(cloneT)

//   }

//   const handleAdd = ()=>{
//     // let clonedBars = [...numOfBars];
//     // clonedBars.push(0);
//     // setNumOfBars(clonedBars)
//   }

//   const handleRestart = ()=>{
//     // setNumOfBars([0])
//     // clearInterval(timerId);
//     //   setTimerId(null);
//   }

//   const renderTime = ()=>{
//     let msInHr = 1000*3600;
//     let msInMin=1000*60;
//     let msInSec=1000;
//     let total = timeElapsed;
//     let hrs = Math.floor(total/(1000*3600));
//     if(hrs>0){
//       total = total%msInHr
//     }
//     let mins=  Math.floor(total/(msInMin));
//     if(mins>0){
//       total = total%msInMin
//     }
//     let sec=  Math.floor(total/(msInSec));
//     if(sec>0){
//       total = total%msInSec
//     }
//     let ms=total;

//     return <div>{`${hrs >0 ? hrs: "00"}: ${mins >0 ? mins: "00"}: ${sec >0 ? sec: "00"}: ${ms >0 ? ms: "00"}` }</div>
//   }

//   return (
//     <div className="App">
//       <button onClick={handleAdd}>Add</button>
//       <button onClick={handleToggle}>{timerId?"Pause": "Play"}</button>
//       <button onClick={handleRestart}>Restart</button>

//       <div>{renderTime()}</div>
//     </div>
//   );
// }

// function App (){
//   return (<Carousel  items={[
//     "https://i5.walmartimages.com/dfw/4ff9c6c9-1c24/k2-_299e3404-7ce8-44d4-ba7d-4d4897fd5901.v1.jpg?odnHeight=447&odnWidth=794&odnBg=&odnDynImageQuality=70",
//     "https://i5.walmartimages.com/dfw/4ff9c6c9-7acd/k2-_6d67eb3d-c87a-4a43-aa6e-298e4c9a9a48.v1.jpg?odnHeight=512&odnWidth=770&odnBg=&odnDynImageQuality=70",
//     "https://i5.walmartimages.com/dfw/4ff9c6c9-6da8/k2-_c6ef1b8b-e2dd-471d-a7ff-3914494487c2.v1.jpg?odnHeight=512&odnWidth=770&odnBg=&odnDynImageQuality=70",
//     "https://i5.walmartimages.com/dfw/4ff9c6c9-6c5b/k2-_3d347f88-cf15-47fa-9211-b4ffcf6dae84.v1.jpg?odnHeight=584&odnWidth=1024&odnBg=&odnDynImageQuality=70",
//   ]}
//   duration={2000}

//    /> )
// }


// function App() {
//   return (
//     <div className="App">
//       <h1>Hello, this is a React tooltip demo</h1>
//       <p> Try hovering the emojis below </p>

//       <div className="example-wrapper">
//         <Tooltip content="Yee-haw!" direction="right">
//           <span className="example-emoji" role="img" aria-label="cowboy emoji">
//             🤠
//           </span>
//         </Tooltip>
//       </div>

//       <div className="example-wrapper">
//         <Tooltip content="Quack!" direction="top">
//           <span className="example-emoji" role="img" aria-label="duck emoji">
//             🦆
//           </span>
//         </Tooltip>
//       </div>

//       <div className="example-wrapper">
//         <Tooltip
//           content="Ring-ding-ding-ding-dingeringeding!"
//           direction="bottom"
//         >
//           <span className="example-emoji" role="img" aria-label="fox emoji">
//             🦊
//           </span>
//         </Tooltip>
//       </div>

//       <div className="example-wrapper">
//         <Tooltip
//           content={
//             <>
//               Bring me
//               <br />
//               to your leader
//             </>
//           }
//           direction="left"
//           delay="0"
//         >
//           <span className="example-emoji" role="img" aria-label="alien emoji">
//             👽
//           </span>
//         </Tooltip>
//       </div>

//       <div className="example-wrapper">
//         <Tooltip
//           content={
//             <span role="img" aria-label="rabbit emoji">
//               🐇
//             </span>
//           }
//           direction="bottom"
//         >
//           <span className="example-emoji" role="img" aria-label="tophat emoji">
//             🎩
//           </span>
//         </Tooltip>
//       </div>
//     </div>
//   );
// }

function App(){
  return (
    <>
    <div style={{height: '1000px'}}>Agfjh</div>
    <Tooltip2 content="Hey"><div>Please Hover</div></Tooltip2>
    <div style={{height: '1000px'}}>bottt</div>
    </>
  )
}

export default App;
