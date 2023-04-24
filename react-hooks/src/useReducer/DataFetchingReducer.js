import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const initialState = {
    isLoading:true,
    post:{},
    error:''
}
const reducer = (state, action)=>{
    switch(action.type){
        case 'SUCCESS':
            return ({isLoading:false,
             error: '',
            post: action.payload})
        case 'FAILURE':
            return({isLoading:true,
            error:'Something went wrong',
            post:{}})
        default:
            return state;
    }
}

function DataFetchingReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
                dispatch({type:'SUCCESS',payload:res.data,error:'' })
            }
        ).catch(e=>{
                dispatch({type:'FAILURE', payload:{}, error:e})
        })
    },[])
    console.log(state);
  return (
    <div>
        {state.isLoading?'Loading':state.post.title}
    </div>
  )
}

export default DataFetchingReducer