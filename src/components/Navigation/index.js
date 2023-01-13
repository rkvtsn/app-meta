import { NavLink } from "react-router-dom";
import Routes from "../../routes";
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
          <NavLink role="button" to={Routes.Home} style={getActiveStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            role="button"
            to={Routes.NotImplemented}
            style={getActiveStyle}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            role="button"
            to={Routes.NotImplemented}
            style={getActiveStyle}
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink role="button" to={Routes.Booking} style={getActiveStyle}>
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link-higllighted"
            role="button"
            to={Routes.NotImplemented}
            style={getActiveStyle}
          >
            Order online
          </NavLink>
        </li>

        <li>
          <NavLink role="button" to={Routes.NotImplemented}>
            <Icon icon={Icons.Basket} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
