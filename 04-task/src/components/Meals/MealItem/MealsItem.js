import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealtemForm';
import CartContext from '../../../store/cart-context';

const MealsItem = (props) => {

    const cartCtx = useContext(CartContext)

    const { name, description, price, id } = props

    const addItemToCartHandler = (amount) => {
        cartCtx.addItem({
            amount,
            name,
            price,
            id
        })
    }

    return <li className={classes.card}>
        <h2 className={classes.title}>{name}</h2>
        <p>{description}</p>
        <span className={classes.price}>$ {price}</span>
        <MealItemForm onAddToCard={addItemToCartHandler} />
    </li>
}

export default MealsItem;