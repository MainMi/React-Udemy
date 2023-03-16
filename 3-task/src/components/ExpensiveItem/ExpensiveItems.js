import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensiveFilter";
import ExpensiveItem from "./ExpensiveItem";

import './ExpensiveItems.css'

function ExpensiveItems(props) {
    const { expenses } = props;

    const [ filterYear, setFilterYear ] = useState(2023);

    const changeFilterHandler = enteredYear => {
        setFilterYear(enteredYear)
    }
    console.log(props);
    return <Card className="expenses">
        <ExpensesFilter selected={filterYear} onChangeFilter={changeFilterHandler}/>
        { expenses.map((value, index) => 
            (filterYear == value.date.getFullYear()) 
            ? (<ExpensiveItem
            date={value.date}
            title={value.title}
            amount={value.amount}
            key={index} />)
            : null
        )}
        
    </Card>
    
}
export default ExpensiveItems;