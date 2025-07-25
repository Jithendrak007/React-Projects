import './css/ExpenseDate.css'

const ExpenseDate = (data) => {
  const month = data.date.toLocaleString("en-US", { month: "long" });
  const year = data.date.getFullYear();
  const day = data.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;