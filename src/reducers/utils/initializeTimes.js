import { fetchAPI } from "../../api/fetchAPI";
import { formatDate } from "../../utils/formatDate";

export const initializeTimes = (now) => {
  const availableTimes = fetchAPI(now);
  return {
    date: formatDate(now),
    time: "",
    guests: 1,
    occasion: "",
    availableTimes,
  };
};
