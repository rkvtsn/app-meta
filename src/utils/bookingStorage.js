const KEY = "booking-details";

export const bookingLoad = () => {
  return JSON.parse(localStorage.getItem(KEY) || "{}");
};

export const bookingSave = (data) => {
  localStorage.setItem(KEY, JSON.stringify(data));
};
