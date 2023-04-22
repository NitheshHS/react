import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    
  return (
    <div>
        <p>count: {count}</p>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>increment</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setCount(prevCount=>prevCount-1)}>decrement</button>
    </div>
  )
}

export default Counter