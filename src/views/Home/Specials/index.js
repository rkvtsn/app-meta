import Products from "../../../components/Products";
import "./styles.css";

const Specials = ({ products }) => {
  return (
    <article className="specials">
      <div className="specials__title">
        <h2>This week specials</h2>
        <button>Online Menu</button>
      </div>
      <Products data={products} />
    </article>
  );
};

export default Specials;
