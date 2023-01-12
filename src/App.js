import "./App.css";
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { Outlet } from "react-router-dom";
import { useBooking } from "./reducers/booking";

function App() {
  const [state, dispatch] = useBooking();

  return (
    <>
      <AppHeader />
      <Main>
        <Outlet context={[state, dispatch]} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
