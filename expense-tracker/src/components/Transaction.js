import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
function Transaction({transaction}) {
 const {deleteTransaction} = useContext(GlobalContext);
  return (
    <li className={transaction.amount>0?'plus':'minus'} key={transaction.id}>
          {transaction.text} <span>{transaction.amount}
          </span><button class="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>x</button>
    </li> 
  )
}

export default Transaction