import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {
  return (
      props.filteredExpense.length === 0 ? 'No Expenses in this year' : props.filteredExpense.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date} />
      ))
  )
}

export default ExpenseList