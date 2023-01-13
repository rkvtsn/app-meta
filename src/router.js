import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Routes from "./routes";
import Booking from "./views/Booking";
import BookingConfirm from "./views/BookingConfirm";
import Home from "./views/Home";

const router = createBrowserRouter([
  {
    path: Routes.Root,
    element: <App />,
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
    ],
  },
]);

export default router;
