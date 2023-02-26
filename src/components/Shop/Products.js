import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ITEMS = [
  {
    id: "p1",
    price: 6,
    name: "My first book",
    description: "This is my first book I've ever written",
  },
  {
    id: "p2",
    price: 2,
    name: "My second book",
    description: "This is my second book I've ever written",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.name}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
