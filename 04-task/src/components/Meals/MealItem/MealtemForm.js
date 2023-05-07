import classes from './MealItemForm.module.css';

import Input from '../../UI/Input';
import { useRef, useState } from 'react';

const MealItemForm = (props) => {

    const amountInputRef = useRef();

    const [validInputAmount, setValidInputAmount] = useState(true);

    const submitHandler = (ev) => {
        ev.preventDefault()

        const enterAmount = amountInputRef.current.value;

        const validateAmount = enterAmount.trim().length === 0 
            || +enterAmount < 1 
            || +enterAmount > 5

        if (validateAmount) {
            setValidInputAmount(false)
            return
        }
        setValidInputAmount(true);
        props.onAddToCard(+enterAmount);
    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={amountInputRef}
            label='Amount'
            input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}
        />

        <button className={classes.btn}>+ Add</button>
        {!validInputAmount && <p>Input value is not valid</p>}
    </form>
}

export default MealItemForm;