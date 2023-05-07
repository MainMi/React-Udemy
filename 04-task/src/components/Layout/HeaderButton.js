import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CardIcon from '../Cart/CartIcon';
import classes from './HeaderButton.module.css';

const HeaderButtton = (props) => {
    
    const cartCtx = useContext(CartContext)
    const counterAmount = cartCtx.items.reduce((prev, crr) => prev + crr.amount,0)
    return <button className={classes.btn} onClick={props.onClickShowCard}>
        <div className={classes.imageBox}>
            <CardIcon/>
        </div>
        <span className={classes.title}>Your Card</span>
        <div className={classes.counter}>{ counterAmount }</div>
    </button>
}

export default HeaderButtton;