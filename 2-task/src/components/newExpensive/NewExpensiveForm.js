import { useState } from 'react';

import ButtonExpensive from '../UI/ButtonExpensive';
import './NewExpensiveForm.css'

function NewExpensiveForm () {
    const [ enteredTitle, setEnteredTitle ] = useState('');
    const [ enteredPrice, setEnteredPrice ] = useState('');
    const [ enteredDate, setEnteredDate ] = useState('');

    const titleChangeHandler = (ev) => setEnteredTitle(ev.target.value);
    const priceChangeHandler = (ev) => setEnteredPrice(ev.target.value);
    const dateChangeHandler = (ev) => setEnteredDate(ev.target.value);

    const submitHandler = (ev) => {
        ev.preventDefault();
        let testData = {
            title: enteredTitle,
            price: enteredPrice,
            date: enteredDate
        }
        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate('');
    }

    return <form className="new-expense__controls" onSubmit={submitHandler}>
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
            <label>Price</label>
            <input type="number" min="0.05" step="0.05" value={enteredPrice} onChange={priceChangeHandler}></input>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" step="2025-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
        </div>
        <ButtonExpensive className="new-expense__action" type="submit">Submit</ButtonExpensive>
    </form>
}

export default NewExpensiveForm;