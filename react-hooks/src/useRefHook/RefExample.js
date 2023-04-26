import React, { useEffect, useRef } from 'react'

function RefExample() {
    const ref = useRef(null)
    useEffect(()=>{
        ref.current.focus();
    },[])
  return (
    <div>
        <input type='text' ref={ref}/>
    </div>
  )
}

export default RefExample