import Icon from "../Icon";
import Icons from "../Icon/Icons";
import Image from "../Image";
import "./styles.css";

const Product = ({ name, id, img, price, description }) => {
  const handleOnOrder = () => {
    console.log("handle order", { id });
  };

  return (
    <div className="product">
      <Image alt={name} src={img} />
      <div className="product__content">
        <div className="product-title rows-layout">
          <h3 className="product-name">{name}</h3>
          <span className="product-price">${price}</span>
        </div>
        <p className="product-description">{description}</p>
        <a
          className="product__order-btn"
          href="#/order"
          onClick={handleOnOrder}
        >
          <span>Order a delivery</span>
          <Icon size="s" icon={Icons.Delivery} />
        </a>
      </div>
    </div>
  );
};

export default Product;
