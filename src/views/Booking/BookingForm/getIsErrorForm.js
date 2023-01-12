import { formatDate } from "../../../utils/formatDate";

export const getIsErrorForm = (value) => {
  if (!value) return "Unexpected error";
  const date = new Date(value.date);
  if (!value.date || isNaN(date.getTime())) return "Incorrect date";
  const today = new Date(formatDate(new Date()));
  if (date < today) return "Date can't be before today";
  if (value.time === "") return "Time must be selected";
  if (
    isNaN(parseInt(value.guests)) ||
    parseInt(value.guests) <= 0 ||
    parseInt(value.guests) >= 11
  )
    return "Number of guests must be greater 0 and less 11";
  return false;
};
