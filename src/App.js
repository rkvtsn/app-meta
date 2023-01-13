import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { ACTION_RESET, useBooking } from "./reducers/booking";
import { submitAPI } from "./api/submitAPI";
import Routes from "./routes";
import { useCallback } from "react";
import { bookingSave } from "./services/bookingStorage";

function App() {
  const navigate = useNavigate();
  const [state, dispatch] = useBooking();

  const handleSubmitForm = useCallback(() => {
    const result = submitAPI(state);
    if (result) {
      bookingSave(state);
      dispatch({
        type: ACTION_RESET,
      });
      navigate(Routes.BookingConfirm);
    }
  }, [state, dispatch, navigate]);

  return (
    <>
      <AppHeader />
      <Main>
        <Outlet context={[state, dispatch, handleSubmitForm]} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
