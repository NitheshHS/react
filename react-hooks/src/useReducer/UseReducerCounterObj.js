import React, { useReducer } from 'react'

const initialValue = {
    firstValue:0,
    secondValue:10
};
const reducer = (state, action)=>{
    switch(action.type){
        case 'increment':
            return {...state,firstValue: state.firstValue+action.value}
        case 'decrement':
            return {...state, firstValue: state.firstValue-action.value}
        case 'increment 2':
            return {...state,secondValue: state.secondValue+action.value}
        case 'decrement 2':
            return {...state, secondValue: state.secondValue-action.value}
        case 'reset':
            return {...state, firstValue: action.value, secondValue:action.value2}
        default:
            return initialValue;
    }
}
function UseReducerCounterObj() {
    const[count, dispatch]=useReducer(reducer, initialValue)
  return (
    <div>
        <div>First Counter - {count.firstValue}</div>
        <div>Second Counter -{count.secondValue}</div>
        <div>
        <button onClick={()=>dispatch({type:'increment', value:1})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement', value:1})}>Decrement</button>
        </div>
        <div>
            <button onClick={()=>dispatch({type:'increment 2', value:5})}>Increment 2</button>
            <button onClick={()=>dispatch({type:'decrement 2', value:5})}>Decrement 2</button>
        </div>
        
        <button onClick={()=>dispatch({type:'reset', value:0, value2:5})}>Reset</button>
    </div>
  )
}

export default UseReducerCounterObj