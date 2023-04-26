import React, { useReducer } from 'react'

const intialValue = {
    name: '',
    age:0
}
const reducer = (state, action)=>{
    switch(action.type){
        case 'INPUT':
            return {...state, name: action.userName}
        case 'AGE':
            return {...state, age: action.age}
    }
}
function FormReducer() {
    const [state, dispatch] = useReducer(reducer, intialValue)
    const handleInput = (e)=>{
        dispatch({type:'INPUT', userName: e.target.value})
    }
    const handleIncrementAge = ()=>{
       dispatch({type:'AGE', age: state.age+1})
    }
    const {name, age} = state;
  return (
    <div>
        <input type='text' value={state.name} onChange={handleInput}></input>
        <button onClick={handleIncrementAge}>Increment Age</button>
        {name.length>0?<h2>Your Name {name} and {age} years old</h2>:''}
    </div>
  )
}

export default FormReducer