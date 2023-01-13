import { useCallback } from "react";
import FormErrorLine from "../../../components/FormErrorLine";
import useValidateForm from "../../../hooks/useValidationForm";
import { getErrorForm } from "./getErrorForm";
import "./styles.css";

const BookingForm = ({ value, onChange, onSubmit }) => {
  const handleChange = useCallback(
    (e) => onChange(e.target.name, e.target.value),
    [onChange]
  );

  const { isTouched, formErrors, hasErrors, handlers } = useValidateForm(
    getErrorForm,
    value,
    handleChange
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    !hasErrors && onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="form-line form-line--required">
        <label htmlFor="res-date">Date</label>
        <input
          name="date"
          value={value.date}
          type="date"
          id="res-date"
          aria-required="true"
          aria-invalid={!!formErrors["date"]}
          {...handlers}
        />
        <FormErrorLine isTouched={isTouched} error={formErrors["date"]} />
      </div>

      <div className="form-line form-line--required">
        <label htmlFor="res-time">Time</label>
        <select
          name="time"
          value={value.time}
          id="res-time"
          aria-required="true"
          aria-invalid={!!formErrors["time"]}
          {...handlers}
        >
          <option value="">-</option>
          {value.availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <FormErrorLine isTouched={isTouched} error={formErrors["time"]} />
      </div>

      <div className="form-line form-line--required">
        <label htmlFor="guests">Number of guests</label>
        <input
          name="guests"
          value={value.guests}
          type="number"
          placeholder=""
          required
          min="1"
          max="10"
          id="guests"
          aria-required="true"
          aria-invalid={!!formErrors["guests"]}
          {...handlers}
        />
        <FormErrorLine isTouched={isTouched} error={formErrors["guests"]} />
      </div>

      <div className="form-line">
        <label htmlFor="occasion">Occasion</label>
        <select
          name="occasion"
          value={value.occasion}
          id="occasion"
          {...handlers}
        >
          <option value="">N/A</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <input
        disabled={hasErrors}
        aria-disabled={hasErrors}
        aria-label="Submit"
        type="submit"
        value={
          hasErrors ? "Please, fill required fields" : "Make Your reservation"
        }
      />
    </form>
  );
};

export default BookingForm;
