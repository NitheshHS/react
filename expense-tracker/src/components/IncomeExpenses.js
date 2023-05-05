import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function IncomeExpenses() {
  const {transactions} = useContext(GlobalContext);
  const income = transactions
                  .filter(transaction=>transaction.amount>0)
                  .map(transaction=>transaction.amount).reduce((acc, num)=>acc+num,0);
  const expenses= transactions
  .filter(transaction=>transaction.amount<0)
  .map(transaction=>transaction.amount).reduce((acc, num)=>acc+num,0);
  return (
    <div class="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${expenses}</p>
        </div>
      </div>
  )
}

export default IncomeExpenses