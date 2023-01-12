import { useState } from "react";
import Image from "../../components/Image";
import Images from "../../components/Image/Images";
import BookingForm from "./BookingForm";
import { BOOKING_DEFAULT_STATE } from "./constants";
import "./styles.css";

const Booking = () => {
  const [state, setState] = useState(BOOKING_DEFAULT_STATE);

  const handleSubmit = () => {
    console.log(state);
  };

  return (
    <section className="booking">
      <h1>Reserve a Table</h1>
      <div className="booking-content">
        <BookingForm
          value={state}
          onChange={setState}
          onSubmit={handleSubmit}
        />
        <Image className="backdrop" src={Images.Restaurant} />
      </div>
    </section>
  );
};

export default Booking;
