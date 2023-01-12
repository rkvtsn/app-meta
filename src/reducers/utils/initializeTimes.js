import formArray from "../../utils/formArray";
import { formatDate } from "../../utils/formatDate";

export const initializeTimes = (now, start, end) => {
  const availableTimes = formArray(start, end, (i) => `${i}:00`);
  return {
    date: formatDate(now),
    time: "",
    guests: 1,
    occasion: 0,
    availableTimes,
  };
};
