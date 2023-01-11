import "./App.css";
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Home from "./views/Home";

function App() {
  return (
    <>
      <AppHeader />
      <Main>
        <Home />
      </Main>
      <Footer />
    </>
  );
}

export default App;
