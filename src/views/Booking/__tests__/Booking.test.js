import { render, screen } from "@testing-library/react";
import Booking from "..";

const MOCK_DATA = {
  date: "11-11-2000",
  time: "11:00",
  availableTimes: ["11:00"],
  guests: 2,
  occasion: "",
};

jest.mock("react-router-dom", () => ({
  useOutletContext: () => [{ ...MOCK_DATA }, () => ({ ...MOCK_DATA })],
}));

test("Renders the BookingForm heading", () => {
  render(<Booking />);
  expect(screen.getByText("Reserve a Table")).toBeInTheDocument();
});
