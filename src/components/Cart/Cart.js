import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { cartActions } from "../../store/cart"


const Cart = (props) => {
  
  const items = useSelector(state => state.cart.items)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>

        {items.map(item => {
          return (
            <CartItem
              key={item.title}
              item={item}
            />
          )
        })}
        
      </ul>
    </Card>
  );
};

export default Cart;
