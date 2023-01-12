import { useState } from "react";
import BookingForm from "./BookingForm";
import { BOOKING_DEFAULT_STATE } from "./constants";

const Booking = () => {
  const [state, setState] = useState(BOOKING_DEFAULT_STATE);

  const handleSubmit = () => {
    console.log(state);
  };

  return (
    <section className="booking">
      <BookingForm value={state} onChange={setState} onSubmit={handleSubmit} />
    </section>
  );
};

export default Booking;
