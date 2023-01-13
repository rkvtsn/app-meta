import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Routes from "./routes";
import Booking from "./views/Booking";
import BookingConfirm from "./views/BookingConfirm";
import ErrorPage from "./views/ErrorPage";
import Home from "./views/Home";
import UnderConstruction from "./views/UnderConstruction";

const router = createBrowserRouter([
  {
    path: Routes.Root,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: Routes.Booking,
        element: <Booking />,
      },
      {
        path: Routes.BookingConfirm,
        element: <BookingConfirm />,
      },
      {
        path: Routes.NotImplemented,
        element: <UnderConstruction />,
      },
    ],
  },
]);

export default router;
