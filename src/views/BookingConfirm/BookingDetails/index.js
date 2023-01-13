import BookingDetail from "./BookingDetail";
import "./styles.css";

const BookingDetails = ({ details, onRemove }) => {
  if (!details?.length) {
    return <h2>No bookings found</h2>;
  }

  return (
    <div className="booking-details">
      {details.map((booking) => (
        <BookingDetail key={booking.id} onRemove={onRemove} {...booking} />
      ))}
    </div>
  );
};

export default BookingDetails;
