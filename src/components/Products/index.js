import Product from "../Product";
import "./styles.css";

const Products = ({ data }) => {
  return (
    <div className="products rows-layout">
      {data.map((item) => (
        <Product
          key={item.id}
          name={item.name}
          id={item.id}
          img={item.img}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Products;
