import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date().getTime())
    
    const tick = ()=>{
      setCount(prevCount => prevCount+1)
    }
    const changeTime = ()=>{
      setDate(new Date().getTime())
    }

    useEffect(()=>{
      const timeInterval = setInterval(changeTime, 1000)
      const interval = setInterval(tick, 1000)
      return ()=> clearInterval(interval, timeInterval)
      
    },[])

   const changedDate=new Date(date);
  return (
    <div>{count}
    <h1 style={{color:'red'}}>{changedDate.getHours()}:{changedDate.getMinutes()}:{changedDate.getSeconds()}</h1>
    </div>
  )
}

export default IntervalHookCounter