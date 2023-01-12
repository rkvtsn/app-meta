import { useOutletContext } from "react-router-dom";
import Image from "../../components/Image";
import Images from "../../components/Image/Images";
import { ACTION_CHANGE } from "../../reducers/booking";
import BookingForm from "./BookingForm";
import "./styles.css";

const Booking = () => {
  const handleSubmit = () => {};
  const [value, dispatch] = useOutletContext();

  const handleOnChange = (payload) => {
    dispatch({
      type: ACTION_CHANGE,
      payload,
    });
  };

  return (
    <section className="booking">
      <h1>Reserve a Table</h1>
      <div className="booking-content">
        <BookingForm
          value={value}
          onChange={handleOnChange}
          onSubmit={handleSubmit}
        />
        <Image className="backdrop" src={Images.Restaurant} />
      </div>
    </section>
  );
};

export default Booking;
