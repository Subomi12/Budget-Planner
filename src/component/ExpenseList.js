import React from "react";
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () =>{
    const { expenses } =React.useContext(AppContext);

    return(
        <ul className='list-group'>
            {expenses.map((expense)=>(
                <ExpenseItem id = {expense.id} name = {expense.name} cost = {expense.cost}/>
            ))}
        </ul>
    )
}

export default ExpenseList;