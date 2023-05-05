import React, { useReducer } from 'react'
import AppReducer from './AppReducer'

const intialState= {
    transactions:[
        {id:1, text:'Salary', amount:150},
        {id:2, text:'Flowers', amount:-30},
        {id:3, text:'Bike', amount:70}
    ]
}

export const GlobalContext = React.createContext(intialState)

export const GlobalProvider=({children})=> {
    const [state, dispatch] = useReducer(AppReducer, intialState)
    function deleteTransaction(id){
      dispatch({
        type:'DELETE_TRANSACTION',
        payload:id
      })
    }
    function addTransaction(transaction){
      dispatch({
        type:'ADD_TRANSACTION',
        payload: transaction
      })
    }
  return (
    <GlobalContext.Provider value={{
    transactions:state.transactions,
    deleteTransaction,
    addTransaction }}>
      {children}
    </GlobalContext.Provider>
  )
}


