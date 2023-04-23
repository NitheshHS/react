import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [cordinate, setCordinate] = useState({x:0, y:0})
    const logMousePosition = (e)=>{
        console.log("Mouse moved");
        setCordinate({
            x: e.clientX,
            y: e.clientY
        })
    }
    useEffect(()=>{
       console.log("Use Effect called");
       window.addEventListener('mousemove', logMousePosition);
       //to cleanUp useEffect call a fn withing a fn and return the fun
       return ()=>{
        console.log('Component will umount called');
        window.removeEventListener('mousemove', logMousePosition)
       }
    },[])//pass empty array to render useEffect only once
  return (
    <div>
        <h1>X - {cordinate.x} Y - {cordinate.y}</h1>
    </div>
  )
}

export default HookMouse