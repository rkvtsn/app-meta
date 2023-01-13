import { useEffect, useState } from "react";
import { bookingLoad } from "../../../utils/bookingStorage";
import "./styles.css";

const BookingDetails = () => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    setDetails(bookingLoad());
  }, []);

  if (!details) return null;
  return (
    <div className="booking-details">
      <ul className="booking-details__content">
        <li>
          <span>Date:</span> {details.date}
        </li>
        <li>
          <span>Time:</span> {details.time}
        </li>
        <li>
          <span>Guests:</span> {details.guests}
        </li>
        <li>
          <span>Occasion:</span> {details.occasion}
        </li>
      </ul>
    </div>
  );
};

export default BookingDetails;
