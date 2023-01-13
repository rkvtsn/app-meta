import { formatDate } from "../../../utils/formatDate";

export const getErrorForm = (value) => {
  const errors = [];
  if (!value) return ["Unexpected error"];
  const date = new Date(value.date);
  if (!value.date || isNaN(date.getTime())) {
    errors.push("Incorrect date");
  }
  const today = new Date(formatDate(new Date()));
  if (date < today) {
    errors.push("Date can't be before today");
  }
  if (value.time === "") {
    errors.push("Time must be selected");
  }
  if (
    isNaN(parseInt(value.guests)) ||
    parseInt(value.guests) <= 0 ||
    parseInt(value.guests) >= 11
  ) {
    errors.push("Number of guests must be greater 0 and less 11");
  }
  return errors;
};
