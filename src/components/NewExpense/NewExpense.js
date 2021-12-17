import './NewExpense.css'
import './ExpenseForm.css'
import ExpenseForm from "./ExpenseForm";
import React, {useState} from "react";

const NewExpense = (props) => {
    const newExpenseHandler = (newExpense) => {
        props.onAddExpense(newExpense);
    }
    const [showForm, setShowForm] = useState(false);

    const buttonHandler = () => {
        if (showForm) {
            setShowForm(false)
        } else {
            setShowForm(true)
        }
    }


        return (
            <div className={"new-expense"}>
                {showForm ? <ExpenseForm onNewExpense={newExpenseHandler} size={props.expenseSize} hideForm={buttonHandler}/> :
                            <button onClick={buttonHandler}>Add Expense</button>}
            </div>
        )
}


export default NewExpense;