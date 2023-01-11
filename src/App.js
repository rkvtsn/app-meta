import "./App.css";
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <AppHeader />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default App;
