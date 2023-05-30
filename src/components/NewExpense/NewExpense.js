import ExpenseForm from './ExpenseForm.js'
import './NewExpense.css';
import {useState} from "react";

const NewExpense = (props) => {
    const [activeForm, setActiveForm] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        
        props.onAddExpense(expenseData)
        setActiveForm(false);
    }
    
    const toggleForm = () => {
        setActiveForm(!activeForm);
    }

    if (activeForm) {
        return (<div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onReset={toggleForm}/>
        </div>)
    }

    return (<div className="new-expense">
        <button type="button" onClick={toggleForm}>Add New Expense</button>
    </div>)



}

export default NewExpense;