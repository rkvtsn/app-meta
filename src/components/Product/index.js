import Icon from "../Icon";
import Icons from "../Icon/Icons";

const Product = ({ name, id, img, price, description }) => {
  const handleOnOrder = () => {
    console.log("order", { id });
  };

  return (
    <div className="product">
      <img alt={name} src={img} />
      <div>
        <div>{name}</div>
        <div>${price}</div>
      </div>
      <div>{description}</div>
      <a href="#/order" onClick={handleOnOrder}>
        Order a delivery <Icon icon={Icons.Delivery} />
      </a>
    </div>
  );
};

export default Product;
