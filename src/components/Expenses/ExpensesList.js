import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {
  let expensesContent = <p>No expenses found.</p>;

  if (props.items.length > 0) {
    expensesContent = props.items.map(expense => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ))
  }
}

export default ExpensesList;