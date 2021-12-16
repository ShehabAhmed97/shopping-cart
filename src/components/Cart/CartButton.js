import classes from './CartButton.module.css';

import {useDispatch} from 'react-redux'
import { cartActions } from "../../store/cart"
import { useSelector } from "react-redux"

const CartButton = (props) => {
  
  const dispatch = useDispatch();
  const cartCounter = useSelector(state => state.cart.cartCounter)

  function handleToggle() {
    dispatch(cartActions.toggle())
  }

  return (
    <button onClick={handleToggle} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartCounter}</span>
    </button>
  );
};

export default CartButton;
