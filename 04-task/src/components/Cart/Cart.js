import { useContext } from 'react';
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = props => {

    const cartCtx = useContext(CartContext);

    const totalPrice = cartCtx.totalAmount.toFixed(2);

    const addCartHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    }

    const removeCartHandler = (id) => {
        cartCtx.removeItem(id)
    }

    const CardItems = cartCtx.items.map((item) => {
        const { id , price, counter, amount, name } = item;
        return <CartItem
            id={id}
            price={price}
            counter={counter}
            amount={amount}
            name={name}
            onRemove={removeCartHandler.bind(null, id)}
            onAdd={addCartHandler.bind(null, item)}
            />
    });
    return <Modal onHiddenCart={props.onHiddenCart}>
        <div className={classes.CartItemBox}>{CardItems}</div>
        <div className={classes.totalBox}>
            <div className={classes.priceBox}>
                <h2>Total:</h2>
                <span className={classes.totalPrice}>{ totalPrice }$</span>
            </div>
            <div className={classes.buttonBox}>
                <button onClick={props.onHiddenCart} className={classes.btn}>Close</button>
                <button className={classes.btn}>Order</button>
            </div>
        </div>
    </Modal>
}

export default Cart;