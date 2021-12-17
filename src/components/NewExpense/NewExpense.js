import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const newExpenseHandler = (newExpense) =>{
        props.onAddExpense(newExpense);
    }

    return <div className={"new-expense"}>
        <ExpenseForm onNewExpense={newExpenseHandler} size={props.expenseSize}/>
    </div>
};
export default NewExpense;