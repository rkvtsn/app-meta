import { useMemo, useState } from "react";
import { getErrorForm } from "./getErrorForm";
import "./styles.css";

const BookingForm = ({ value, onChange, onSubmit }) => {
  const [isTouched, setIsTouched] = useState(false);

  const touchTrigger = () => {
    setIsTouched(true);
  };

  const handleOnChange = (e) => {
    touchTrigger();
    onChange(e.target.name, e.target.value);
  };

  const formErrors = useMemo(() => {
    return getErrorForm(value);
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    !formErrors?.length && onSubmit();
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
          onBlur={touchTrigger}
        />
      </div>

      <div className="form-line form-line--required">
        <label htmlFor="res-time">Time</label>
        <select
          name="time"
          value={value.time}
          onChange={handleOnChange}
          id="res-time"
          onBlur={touchTrigger}
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
          required
          min="1"
          max="10"
          id="guests"
          onBlur={touchTrigger}
        />
      </div>

      <div className="form-line">
        <label htmlFor="occasion">Occasion</label>
        <select
          name="occasion"
          value={value.occasion}
          onChange={handleOnChange}
          id="occasion"
          onBlur={touchTrigger}
        >
          <option value="">N/A</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <span className="form-error">
        {isTouched && formErrors.length ? (
          <ul>
            {formErrors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        ) : null}
      </span>

      <input
        disabled={formErrors.length}
        type="submit"
        value={
          formErrors.length
            ? "Please, fill required fields"
            : "Make Your reservation"
        }
      />
    </form>
  );
};

export default BookingForm;
