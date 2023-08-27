import React from 'react'

import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

  const saveExpenseDataHandler = (newExpenseData) =>{
    const expenseData = {
      ...newExpenseData,
      id:Math.random().toString()
    };
    props.onAddExpense(expenseData);
    console.log(expenseData)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSave={saveExpenseDataHandler}></ExpenseForm>
    </div>
  )
}

export default NewExpense