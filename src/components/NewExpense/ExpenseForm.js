import './ExpenseForm.css'
import React, {useState} from "react";
const ExpenseForm = (props) => {
    const [title, setEnteredTitle] = useState('')
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const [amount, setEnteredAmount] = useState('')
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value)
    }

    const [date, setEnteredDate] = useState('')
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value)
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {id: 'e'+props.size, title: title, amount: amount, date: new Date(date)}
        console.log('submitHandler')
        console.log(expenseData)

        props.onNewExpense(expenseData);
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title}onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className={"new-expense__actions"}>
                <button type={"submit"}>Add Expense</button>
            </div>
        </form>
)};
export default ExpenseForm;