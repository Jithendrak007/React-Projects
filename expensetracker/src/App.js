import logo from './logo.svg';
import './App.css';
import './Components/css/Expenses.css'
import './Components/css/NewExpense.css'
import ExpenseItem from './Components/ExpenseItem';
import Card from './Components/Card'
import Template from './Components/UseStateEx/DataVisualization';
import NewExpense from './Components/NewExpense';
import ExpenseForm from './Components/ExpenseForm';
const App = () => {
  const expenses = [
    { title: "Household Expense", amount: 25000, date: new Date(2023, 4, 27) },
    { title: "Travel Expense", amount: 1300, date: new Date(2023, 4, 27) },
    { title: "Education fees", amount: 5000, date: new Date(2023, 4, 27) },
  ];
  return (
    <div>
      <NewExpense />
      <Card className='expenses'>
        <div>
          <ExpenseItem
            title={expenses[0].title}
            date={expenses[0].date}
            amount={expenses[0].amount}
          ></ExpenseItem>
          <ExpenseItem title={expenses[1].title}
            date={expenses[1].date}
            amount={expenses[1].amount}
          ></ExpenseItem>
          <ExpenseItem title={expenses[2].title}
            date={expenses[2].date}
            amount={expenses[2].amount}
          ></ExpenseItem>
        </div>
      </Card>
      {/* <Template></Template> */}
    </div>
  );
}

export default App;
