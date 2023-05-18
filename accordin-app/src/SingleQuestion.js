import React, { useState } from 'react'
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa'
import './App.css'
function SingleQuestion({question}) {
    const [show, setShow]=useState(false)
  return (
    <div className="accordion">
        <div className="question-title">
        <h2>{question.title}</h2>
        <button classname="btn" onClick={()=>setShow(!show)}>
            {show?<FaMinusCircle/>:<FaPlusCircle/>}
        </button>
        </div>
        
        {show&&<p>{question.info}</p>}
        
    </div>
  )
}

export default SingleQuestion