import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "..";

const MOCK_DATA = {
  date: "",
  time: "",
  guests: "",
  availableTimes: [],
  occasion: "",
};

const mockOnChange = jest.fn((value) => {});
const mockOnSubmit = jest.fn(() => {});

describe("BookingForm", () => {
  test("Renders the BookingForm", () => {
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
    expect(screen.getByText("Occasion")).toBeInTheDocument();
  });

  test("Validation on empty BookingForm", () => {
    render(
      <BookingForm
        value={MOCK_DATA}
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />
    );
    const submit = screen.getByText("Please, fill required fields");
    expect(submit).toBeInTheDocument();

    fireEvent.click(submit);
    expect(mockOnSubmit).not.toBeCalled();
  });

  test("Validation success BookingForm", () => {
    render(
      <BookingForm
        value={{
          date: "11-11-2023",
          time: "11:00",
          availableTimes: ["11:00"],
          occasion: "",
          guests: "1",
        }}
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />
    );
    const submit = screen.getByText("Make Your reservation");
    expect(submit).toBeInTheDocument();

    fireEvent.click(submit);
    expect(mockOnSubmit).toBeCalled();
  });

  test("Validation date BookingForm", () => {
    const data = {
      date: "11-11-2022",
      time: "11:00",
      availableTimes: ["11:00"],
      occasion: "",
      guests: "1",
    };
    render(
      <BookingForm
        value={data}
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />
    );
    const submit = screen.getByText("Please, fill required fields");
    expect(submit).toBeInTheDocument();

    fireEvent.click(submit);
    expect(mockOnSubmit).not.toBeCalled();
  });

  test("Validation guests BookingForm", () => {
    const data = {
      date: "11-12-2023",
      time: "11:00",
      availableTimes: ["11:00"],
      occasion: "",
      guests: "11",
    };
    render(
      <BookingForm
        value={data}
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />
    );
    const submit = screen.getByText("Please, fill required fields");
    expect(submit).toBeInTheDocument();

    fireEvent.click(submit);
    expect(mockOnSubmit).not.toBeCalled();
  });

  test("Validation time BookingForm", () => {
    const data = {
      date: "11-12-2023",
      time: "",
      availableTimes: ["11:00"],
      occasion: "",
      guests: "11",
    };
    render(
      <BookingForm
        value={data}
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />
    );
    const submit = screen.getByText("Please, fill required fields");
    expect(submit).toBeInTheDocument();

    fireEvent.click(submit);
    expect(mockOnSubmit).not.toBeCalled();
  });
});
