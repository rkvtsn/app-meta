import Header from "../Header";
import Logo from "../Logo";
import Navigation from "../Navigation";

const AppHeader = () => {
  const handleOnLogo = () => {
    console.log("redirect home");
  };

  return (
    <Header>
      <a href="#/home" onClick={handleOnLogo}>
        <Logo />
      </a>
      <Navigation />
    </Header>
  );
};

export default AppHeader;
