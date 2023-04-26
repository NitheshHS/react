import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle';

function CounterOne() {
    const [count, setCount] = useState(0);
    useDocumentTitle(count)
    const handleCounter = ()=>{
        setCount(prevCount => prevCount+1)
    }
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={handleCounter}>click</button>
    </div>
  )
}

export default CounterOne