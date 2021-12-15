import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";

function Expenses(props){
    return (
        <Card className={"expenses"}>
            {props.expenses.map(expense =>

                <div>
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />

                </div>
            )}
        </Card>
    );
}
export default Expenses;