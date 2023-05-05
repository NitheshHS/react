import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
function Balance() {
  const {transactions}=useContext(GlobalContext);
  const total=transactions.map(transaction=>transaction.amount).reduce((acc, num)=> acc+num,0)
  return (
    <>
    <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  )
}

export default Balance