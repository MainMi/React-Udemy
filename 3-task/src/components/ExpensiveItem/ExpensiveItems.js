import { useState } from "react";
import Card from "../UI/Card";
import ExpensiveDataFilter from "./ExpenseDataFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensiveFilter";

import './ExpensiveItems.css'

function ExpensiveItems(props) {
    const { expenses } = props;

    const [ filterYear, setFilterYear ] = useState('select');


    const changeFilterHandler = enteredYear => {
        setFilterYear(enteredYear)
    }
    const filterExpenses = expenses.filter(expense => {
        return filterYear === new Date(expense.date).getFullYear().toString()
    })
    const deleteExpensiveItems = (index) => props.onDeleteExpensiveIndex(index); 
    return <Card className="expenses">
        <ExpensesChart expenses={filterExpenses}/>
        <ExpensesFilter selected={filterYear} onChangeFilter={changeFilterHandler} />
        <ExpensiveDataFilter onDeleteExpensiveItem={deleteExpensiveItems}expensiveData={filterExpenses} />
        
    </Card>
    
}
export default ExpensiveItems;