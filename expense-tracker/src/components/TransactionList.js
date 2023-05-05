import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

function TransactionList() {
  const {transactions}=useContext(GlobalContext);
  console.log('transactionList');
  console.log(transactions);
  return (
    <>
     <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction=>(
          <Transaction transaction={transaction}></Transaction>
        ))}
      </ul></>
  )
}

export default TransactionList