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

    return <Card className="expenses">
        <ExpensesFilter selected={filterYear} onChangeFilter={changeFilterHandler}/>
        {
            !(filterYear == expenses[0].date.getFullYear()) || <ExpensiveItem
            date={expenses[0].date}
            title={expenses[0].title}
            amount={expenses[0].amount}
        />
        }
        {
            !(filterYear == expenses[1].date.getFullYear()) || <ExpensiveItem
            date={expenses[1].date}
            title={expenses[1].title}
            amount={expenses[1].amount}
        />
        }
        {
            !(filterYear == expenses[2].date.getFullYear()) || <ExpensiveItem
            date={expenses[2].date}
            title={expenses[2].title}
            amount={expenses[2].amount}
        />
        }
        {
            !(filterYear == expenses[3].date.getFullYear()) || <ExpensiveItem
            date={expenses[3].date}
            title={expenses[3].title}
            amount={expenses[3].amount}
        />
        }
        
    </Card>
    
}
export default ExpensiveItems;