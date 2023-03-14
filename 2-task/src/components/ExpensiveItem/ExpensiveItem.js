import ExpensiveDate from './ExpensiveDate';
import './ExpensiveItem.css';

function ExpensiveItem(props) {
    const { date, title, amount } = props;

    return <div className="expense-item">
        <ExpensiveDate date={date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${amount}</div>
        </div>
    </div>
}

export default ExpensiveItem;