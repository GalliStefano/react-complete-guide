import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');
    const [items, setItems] = useState(props.items)

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);

        const filtered_expence = items.filter(item => item.date.getFullYear() === parseInt(selectedYear));

        console.log(filtered_expence)

        setItems(filtered_expence)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {items.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
              ))}
        </Card>
    )
}

export default Expenses;