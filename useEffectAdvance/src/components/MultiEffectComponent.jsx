import React, { useState,useEffect } from 'react'

const MultiEffectComponent = () => {
    const [count,setCount]=useState(0);
    const [seconds,setSeconds]=useState(0);

    useEffect(() => {
      console.log("Count Changed",count);
    }, [count])


    useEffect(() => {
      const intervalID=setInterval(()=>{
        setSeconds(prevSeconds=>prevSeconds+1);
      },1000);

      return()=>clearInterval(intervalID);
    }, [])
    
    
  return (
    <div>
      <h1>Count is: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <h2>Seconds:{seconds}</h2>
    </div>
  )
}

export default MultiEffectComponent
