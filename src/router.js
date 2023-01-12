import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Booking from "./views/Booking";
import Home from "./views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/reservations",
        element: <Booking />,
      },
    ],
  },
]);

export default router;
