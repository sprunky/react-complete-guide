import ExpenseItem from "./ExpenseItem";


const ExpensesList = props => {
    if (props.dataList.length === 0) {
        return <ul>No expenses found</ul>
    }
    return props.dataList.map(expense => (
        <ul>
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        </ul>
    ));


}

export default ExpensesList;