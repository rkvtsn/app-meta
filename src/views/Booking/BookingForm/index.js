import formArray from "../../../utils/formArray";
import "./styles.css";

const timeOptions = formArray(17, 22, (i) => `${i}:00`);

const BookingForm = ({ value, onChange, onSubmit }) => {
  const handleOnChange = (e) => {
    onChange((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label htmlFor="res-date">Choose date</label>
      <input
        name="date"
        value={value.date}
        onChange={handleOnChange}
        type="date"
        id="res-date"
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        name="time"
        value={value.time}
        onChange={handleOnChange}
        id="res-time "
      >
        <option value="">-</option>
        {timeOptions.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        name="guests"
        value={value.guests}
        onChange={handleOnChange}
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
      />

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

      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
