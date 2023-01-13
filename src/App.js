import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { ACTION_SAVE, useBooking } from "./reducers/booking";
import { submitAPI } from "./api/submitAPI";
import Routes from "./routes";

function App() {
  const navigate = useNavigate();
  const [state, dispatch] = useBooking();

  const handleSubmitForm = () => {
    const result = submitAPI(state);
    if (result) {
      dispatch({
        type: ACTION_SAVE,
      });
      navigate(Routes.BookingConfirm);
    }
  };

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
