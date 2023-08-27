import React, { useState } from 'react'

import "./ExpenseForm.css"

const ExpenseForm = (props) => {

  const [newTitle, setEnteredTitle] = useState('');
  const [newAmount, setEnteredAmount] = useState('');
  const [newDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

  }

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: newTitle,
      amount: +newAmount,
      date: new Date(newDate)
    }

    props.onSave(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    console.log(expenseData);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input 
            type="text" 
            value={newTitle} 
            onChange={titleChangeHandler} />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input 
            type="number" 
            value={newAmount} 
            onChange={amountHandler} />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input 
            type="date" 
            value={newDate} 
            min="2019-01-01" 
            max="2023-12-01" 
            onChange={dateChangeHandler} />
        </div>
      </div>

      <div className='new-expense__action'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm