import react, { useState } from 'react'

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpenseFilter';

import Card from "./Card";
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

function Item(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  }
  )

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpense}></ExpensesChart>

      <ExpenseList filteredExpense={filteredExpense}></ExpenseList>

    </Card>
  )


}

export default Item;