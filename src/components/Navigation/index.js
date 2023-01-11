import "./styles.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <a href="#/home" role="button">
            Home
          </a>
        </li>
        <li>
          <a href="#/about" role="button">
            About
          </a>
        </li>
        <li>
          <a href="#/menu" role="button">
            Menu
          </a>
        </li>
        <li>
          <a href="#/reservations" role="button">
            Reservations
          </a>
        </li>
        <li>
          <a href="#/order-online" role="button">
            Order online
          </a>
        </li>

        <li>
          <a href="#/login" role="button">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
