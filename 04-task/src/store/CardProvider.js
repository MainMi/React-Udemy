import { useReducer } from "react";
import CartContext from "./cart-context";

const CartProvider = props => {

    
    const addItemToCartHandler = item => {
        dispatchCartState({ type: 'ADD', item })
    };
    
    const removeItemToCartHandler = id => {
        dispatchCartState({ type: 'REMOVE', id })
    };
    
    const defaultCartState = {
        items: [],
        totalAmount: 0
    }
    
    const cartReducer = (state, action) => {
        if (action.type === 'ADD') {
            let existingCartIndex = state.items.findIndex((item) => item.id === action.item.id)

            let existingCartItem = state.items[existingCartIndex];
            let updateItems;

            if (existingCartItem) {
                const updateItem = { 
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                }
                
                updateItems = [...state.items]
                updateItems[existingCartIndex] = updateItem
            } else {
                updateItems = state.items.concat(action.item)
            }

            const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount

            
            return {
                items: updateItems,
                totalAmount: updateTotalAmount
            }
        }
        else if (action.type === 'REMOVE') {
            let existingCartIndex = state.items.findIndex((item) => item.id === action.id)

            const existingCartItem = state.items[existingCartIndex];
            let updateItems;
            if (existingCartItem.amount === 1) {
                updateItems = state.items.filter((item) => item.id !== action.id)
            } else {
                updateItems = [...state.items]
                updateItems[existingCartIndex] = {
                    ...existingCartItem,
                    amount: existingCartItem.amount - 1
                }
            }

            const updateTotalAmount = state.totalAmount - existingCartItem.price;

            return {
                items: updateItems,
                totalAmount: updateTotalAmount
            }
        }
    }
    const [ cartState, dispatchCartState ] = useReducer(cartReducer, defaultCartState);

    const cartContextData = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }

    

    return <CartContext.Provider value={cartContextData}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;