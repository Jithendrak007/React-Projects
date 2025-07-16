import './css/ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import React,{useState} from 'react';

const ExpenseItem=(props)=> {
  const [title,setTitle] = useState(props.title);
  const ClickHandler=()=>{
    setTitle("!Updated");
    console.log(title);
  }
  return (
    <Card className = 'expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>₹ {props.amount}</div>
      </div>
      <button onClick={ClickHandler}>Button Click Test</button>
    </Card>
  );
}

export default ExpenseItem;