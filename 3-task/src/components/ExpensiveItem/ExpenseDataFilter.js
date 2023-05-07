import ExpensiveItem from "./ExpensiveItem";
import './ExpenseDataFilter.css';

const ExpensiveDataFilter = (props) => {
    const { expensiveData } = props

    const deleteExpensiveItem = (index) => props.onDeleteExpensiveItem(index);

    if (expensiveData.length === 0) {
        return <p className="expenses-list__fallback">Items not found</p>
    }
    if (expensiveData.length > 0) {
        return (<ul className="expensiveList">
            { expensiveData.map((value, index) => 
            <ExpensiveItem
            date={value.date}
            title={value.title}
            amount={value.amount}
            key={index}
            index={index}
            onBubleDeleteExpensiveItem={deleteExpensiveItem} />
        )}
        </ul>)
    }
}
export default ExpensiveDataFilter;