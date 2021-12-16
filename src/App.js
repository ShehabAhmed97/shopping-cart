import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { cartActions } from "./store/cart"

let isInitial = true;

function App() {
  const dispatch = useDispatch()
  const showCart = useSelector(state => state.cart.show);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    fetch('https://shopping-cart-f8e1f-default-rtdb.firebaseio.com/cart.json')
    .then((res) => res.json())
    .then((data) => {
      dispatch(cartActions.replaceCart(data))
    })
  },[])


  useEffect(() => {
    if(isInitial){
      isInitial = false;
      return;
    }  
    fetch('https://shopping-cart-f8e1f-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart)
    })  
  },
  [cart])


  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
