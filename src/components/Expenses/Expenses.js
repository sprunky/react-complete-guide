import "./Expenses.css"
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import {useState} from "react";

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2021');

    const handleChangedYear = (year) => {
        setSelectedYear(year);
    }
    const filteredList = props.expenseList.filter(expense => expense.date.getFullYear().toString() === selectedYear)

    return (
        <div>
            <Card className={"expenses"}>
                <ExpenseFilter onChangeYear={handleChangedYear} selected={selectedYear}/>
                <ExpensesList dataList = {filteredList}/>
            </Card>
        </div>
    );
}

export default Expenses;