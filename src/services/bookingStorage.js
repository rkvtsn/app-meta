export const BOOKINGS_KEY = "booking-details";

const generateId = ({ date, time }) => {
  return `${Math.random()}_${date}_${time}`;
};

export const bookingLoad = () => {
  return JSON.parse(localStorage.getItem(BOOKINGS_KEY) || "[]");
};

export const bookingSave = (data) => {
  const bookings = bookingLoad();
  bookings.push({ id: generateId(data), ...data });
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
  return bookings;
};

export const bookingRemove = (id) => {
  const newBookings = bookingLoad().filter((book) => book.id !== id);
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(newBookings));
  return newBookings;
};
