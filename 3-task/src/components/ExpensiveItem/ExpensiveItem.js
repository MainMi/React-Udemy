import ButtonExpensive from '../UI/ButtonExpensive';
import ExpensiveDate from './ExpensiveDate';
import './ExpensiveItem.css';

function ExpensiveItem(props) {
    const { date, title, amount, index } = props;

    const bubleDeleteExpensiveItem = () => props.onBubleDeleteExpensiveItem(index);

    return <div className="expense-item">
        <ExpensiveDate date={date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${amount}</div>
            <ButtonExpensive className="expense-item__button" onClick={bubleDeleteExpensiveItem} >Delete</ButtonExpensive>
        </div>
    </div>
}

export default ExpensiveItem;