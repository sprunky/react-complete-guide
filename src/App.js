import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";

const DUMMY_EXPENSES = [{id : 'e1', date: new Date(2021, 12, 31), title: "Champagne", amount: 1000},
    {id : 'e2', date: new Date(2021, 11, 31), title: "Laptop", amount: 678},
    {id : 'e3', date: new Date(2021, 10, 31), title: "Pumpkins", amount: 112}]
function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const[size, setSize] = useState(expenses.length+1)
    const addNewExpenseHandler = (expense) =>{
        setExpenses((prevExpenses) => {
          return [expense,...prevExpenses]
        })
        setSize((prevSize) => {
            return prevSize+1;
        })
    };

    return (
        <div>
            <NewExpense onAddExpense={addNewExpenseHandler} expenseSize={size}/>
            <Expenses expenseList = {expenses}/>
        </div>
    );
}

export default App;