import LogoSvg from "../../assets/Logo.svg";
import "./styles.css";

const Logo = (props) => {
  return (
    <img className="logo" alt="Little Lemon Logo" src={LogoSvg} {...props} />
  );
};

export default Logo;
