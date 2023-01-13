import "./styles.css";

const BookingDetail = ({ id, date, time, guests, occasion, onRemove }) => {
  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div className="booking-detail">
      <a className="hide" href="#/" role="button" onClick={handleRemove}>
        x
      </a>
      <ul className="booking-detail__content">
        <li>
          <span>Date:</span> {date}
        </li>
        <li>
          <span>Time:</span> {time}
        </li>
        <li>
          <span>Guests:</span> {guests}
        </li>
        {occasion && (
          <li>
            <span>Occasion:</span> {occasion}
          </li>
        )}
      </ul>
    </div>
  );
};

export default BookingDetail;
