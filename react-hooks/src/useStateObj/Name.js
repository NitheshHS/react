import React, { useState } from 'react'

function Name() {
    const [name, setname] = useState({
        firstName:'',
        lastName:''
    })
    const changeFirstName = e=>{
        setname({...name, firstName:e.target.value})
    }
    const changelastName = e =>{
        setname({...name, lastName:e.target.value})
    }
  return (
    <div>
        <input type='text' 
        placeholder='firstName' value={name.firstName}
        onChange={changeFirstName}/>
        <input type='text' 
        placeholder='lastName' value={name.lastName}
        onChange={changelastName}/>
        <h2>First Name: {name.firstName}</h2>
        <h2>Last Name: {name.lastName}</h2>
    </div>
  )
}

export default Name