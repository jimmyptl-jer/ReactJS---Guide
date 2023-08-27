import { useState } from "react"

import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css'


function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle(title === 'Hello' ? props.title : 'Hello');
  }


  return (
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>
            {/* {props.title} */}
            {title}
          </h2>
          <div className='expense-item__price'>
            ${props.amount}
          </div>

          <button
            onClick={clickHandler}
            className="btn btn-secondary">
            Change
          </button>
        </div>
      </Card>
  )
}

export default ExpenseItem;