import { NavLink } from "react-router-dom";
import "./styles.css";

const activeStyle = {
  textDecoration: "underline",
};

const getActiveStyle = ({ isActive }) => (isActive ? activeStyle : undefined);

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
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
          <NavLink role="button" to="/order-online" style={getActiveStyle}>
            Order online
          </NavLink>
        </li>

        <li>
          <NavLink role="button" to="/login" style={getActiveStyle}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
