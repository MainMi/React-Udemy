import classes from './CartItem.module.css';

const CartItem = (props) => {
    return <div className={classes.itemBox} id={props.id}>
            <h2>{props.name}</h2>
            <div className={classes.priceBox}>
                <div className={classes.price}>{props.price}$</div>
                <div>
                    <div>Amount: <span className={classes.counter}>{props.amount}</span></div>
                </div>
            </div>
            <div className={classes.buttonBox}>
                <div className={classes.btn} onClick={props.onAdd}>+</div>
                <div className={classes.btn} onClick={props.onRemove}>-</div>
            </div>
    </div>
}

export default CartItem;