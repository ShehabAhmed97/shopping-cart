import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import { useDispatch } from "react-redux"
import { cartActions } from "../../store/cart"
import { useSelector } from "react-redux"

const ProductItem = (props) => {
  const { title, price, description, id } = props;

  const newItem = {
    id,
    title,
    price,
    description
  }
  
  const dispatch = useDispatch()

  function handleAddition(newItem) {
      dispatch(cartActions.addItem(newItem))
  }
  function handleDeletion(id) {
    dispatch(cartActions.removeItem(id))
}

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => handleDeletion(id)}>Remove from cart</button>
          <button onClick={() => handleAddition(newItem)}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
