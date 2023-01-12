import { NavLink } from "react-router-dom";
import Icon from "../Icon";
import Icons from "../Icon/Icons";
import "./styles.css";

const activeStyle = {
  textDecoration: "underline",
};

const getActiveStyle = ({ isActive }) => (isActive ? activeStyle : undefined);

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="rows-layout">
        <li>
          <NavLink role="button" to="/" style={getActiveStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink role="button" to="/about" style={getActiveStyle}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink role="button" to="/menu" style={getActiveStyle}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink role="button" to="/reservations" style={getActiveStyle}>
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link-higllighted" role="button" to="/order-online" style={getActiveStyle}>
            Order online
          </NavLink>
        </li>

        <li>
          <a role="button" href="#/cart">
            <Icon icon={Icons.Basket} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
