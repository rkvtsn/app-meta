import LogoSvg from "../../assets/Logo.svg";
import "./styles.css";

const Logo = (props) => {
  return (
    <img aria-label="Little Lemon Log" className="logo" alt="Little Lemon Logo" src={LogoSvg} {...props} />
  );
};

export default Logo;
