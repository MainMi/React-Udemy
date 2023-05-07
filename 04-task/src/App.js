import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CardProvider";

function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => setShowCart(true);
  const hiddenCartHandler = () => setShowCart(false);
  return <CartProvider>
    <Header onShowCart={showCartHandler}/>
    <Meals/>
    {showCart && <Cart onHiddenCart={hiddenCartHandler} />}
  </CartProvider>
}

export default App;
