import { render, screen } from "@testing-library/react";
import BookingForm from "..";

const MOCK_DATA = {
  date: "",
  time: "",
  availableTimes: [],
};

const mockOnChange = jest.fn((value) => {});
const mockOnSubmit = jest.fn(() => {});

test("Renders the BookingForm heading", () => {
  render(
    <BookingForm
      value={MOCK_DATA}
      onChange={mockOnChange}
      onSubmit={mockOnSubmit}
    />
  );
  expect(screen.getByText("Number of guests")).toBeInTheDocument();
  expect(screen.getByText("Date")).toBeInTheDocument();
  expect(screen.getByText("Time")).toBeInTheDocument();
});
