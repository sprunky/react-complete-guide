import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const expenses = [{date: new Date(2021, 12, 31), title: "Champagne", amount: 1000},
        {date: new Date(2021, 11, 31), title: "Laptop", amount: 678},
        {date: new Date(2021, 10, 31), title: "Pumpkins", amount: 112}]


    return (
        <div>
            <NewExpense/>
            <Expenses expenses = {expenses}/>
        </div>
    );
}

export default App;