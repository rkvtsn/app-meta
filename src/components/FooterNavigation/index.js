import { NavLink } from "react-router-dom";
import Routes from "../../routes";

const FooterNavigation = () => {
  return (
    <nav className="footer-navigation">
      <ul className="rows-layout">
        <li>
          <NavLink role="button" to={Routes.Home}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink role="button" to={Routes.NotImplemented}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink role="button" to={Routes.NotImplemented}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink role="button" to={Routes.Booking}>
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink role="button" to={Routes.NotImplemented} >
            Order online
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNavigation;
