import FooterNavigation from "../FooterNavigation";
import Logo from "../Logo";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer rows-layout panel-layout">
      <Logo />
      <FooterNavigation />
      <div className="copyright">Little Lemon. Copyright &copy; 2023</div>
    </footer>
  );
};

export default Footer;
