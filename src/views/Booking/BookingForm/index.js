import { useMemo, useState } from "react";
import { getIsErrorForm } from "./getIsErrorForm";
import "./styles.css";

const BookingForm = ({ value, onChange, onSubmit }) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleOnChange = (e) => {
    setIsTouched(true);
    onChange({
      [e.target.name]: e.target.value,
    });
  };

  const formError = useMemo(() => {
    return getIsErrorForm(value);
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    formError && onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="form-line form-line--required">
        <label htmlFor="res-date">Date</label>
        <input
          name="date"
          value={value.date}
          onChange={handleOnChange}
          type="date"
          id="res-date"
        />
      </div>

      <div className="form-line form-line--required">
        <label htmlFor="res-time">Time</label>
        <select
          name="time"
          value={value.time}
          onChange={handleOnChange}
          id="res-time"
        >
          <option value="">-</option>
          {value.availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <div className="form-line form-line--required">
        <label htmlFor="guests">Number of guests</label>
        <input
          name="guests"
          value={value.guests}
          onChange={handleOnChange}
          type="number"
          placeholder=""
          min="1"
          max="10"
          id="guests"
        />
      </div>

      <div className="form-line">
        <label htmlFor="occasion">Occasion</label>
        <select
          name="occasion"
          value={value.occasion}
          onChange={handleOnChange}
          id="occasion"
        >
          <option value="0">N/A</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
      </div>

      <span className="form-error">{isTouched && formError}</span>

      <input
        disabled={formError}
        type="submit"
        value={formError ? "Make Your reservation" : "Fill the form"}
      />
    </form>
  );
};

export default BookingForm;
