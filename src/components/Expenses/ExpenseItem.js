import React, {useState} from 'react';

import './ExpenseItem.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title)
    const amount = props.amount

    function clickHandler() {
        setTitle('Updated!!!')
    }

    return (
        <Card className={'expense-item'}>
            <div>
                <ExpenseDate
                    date={props.date}
                />
            </div>
            <div className={'expense-item__description'}>
                <h2>{title}</h2>
                <div className={'expense-item__price'}>€{amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;