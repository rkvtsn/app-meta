import { NavLink } from "react-router-dom";
import Header from "../Header";
import Logo from "../Logo";
import Navigation from "../Navigation";

const AppHeader = () => {
  return (
    <Header>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <Navigation />
    </Header>
  );
};

export default AppHeader;
