import React, { useEffect, useState } from 'react'

function CounterTwo() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(()=>{
        console.log("use Effect called");
        document.title = `You clicked ${count} times`
    },[count])//pass the arg when to render 
  return (
    <div>
        <input type='text' onChange={(e)=>setName(e.target.value)} value={name}></input>
        <button onClick={()=>setCount(count+1)}>clicked {count} times</button>
    </div>
  )
}

export default CounterTwo