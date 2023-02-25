import ExpensiveItem from "./ExpensiveItem";

function ExpensiveItems(props) {
    const { expenses } = props;
    return <div className="expenses">
        <ExpensiveItem
            date={expenses[0].date}
            title={expenses[0].title}
            amount={expenses[0].amount}
        />
        <ExpensiveItem
            date={expenses[1].date}
            title={expenses[1].title}
            amount={expenses[1].amount}
        />
        <ExpensiveItem
            date={expenses[2].date}
            title={expenses[2].title}
            amount={expenses[2].amount}
        />
        <ExpensiveItem
            date={expenses[3].date}
            title={expenses[3].title}
            amount={expenses[3].amount}
        />
    </div>
    
}
export default ExpensiveItems;