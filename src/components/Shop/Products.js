import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
  {
    id: 1,
    title:'First product',
    price:6,
    description:'This is a first product - amazing!'
  },
  {
    id: 2,
    title:'second product',
    price:6,
    description:'This is a second product - amazing!'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>

        {DUMMY_DATA.map(item => {
          return(
            <ProductItem
              id={item.id}
              title= {item.title}
              price={item.price}
              description={item.description}
            />
          )
        })}
      </ul>
    </section>
  );
};

export default Products;
