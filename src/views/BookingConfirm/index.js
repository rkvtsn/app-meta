import { useEffect, useState } from "react";
import { bookingLoad, bookingRemove } from "../../services/bookingStorage";
import BookingDetails from "./BookingDetails";
import "./styles.css";

const BookingConfirm = () => {
  const [details, setDetails] = useState(null);

  const handleRemove = (id) => {
    setDetails(bookingRemove(id));
  };

  useEffect(() => {
    setDetails(bookingLoad());
  }, []);

  return (
    <section className="booking-confirm">
      <h1>Booking Confirmed</h1>
      <BookingDetails details={details} onRemove={handleRemove} />
    </section>
  );
};

export default BookingConfirm;
