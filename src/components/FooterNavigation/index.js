import { NavLink } from "react-router-dom";

const FooterNavigation = () => {
  return (
    <nav className="footer-navigation">
      <ul className="rows-layout">
        <li>
          <NavLink role="button" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink role="button" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink role="button" to="/menu">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink role="button" to="/reservations">
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link-higllighted"
            role="button"
            to="/order-online"
          >
            Order online
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNavigation;
