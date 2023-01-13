import { formatDate } from "../../../utils/formatDate";

export const getErrorForm = (value) => {
  const formErrors = {};
  if (!value) return ["Unexpected error"];
  const date = new Date(value.date);
  if (!value.date || isNaN(date.getTime())) {
    formErrors.date = "Incorrect date";
  } else {
    const today = new Date(formatDate(new Date()));
    if (date < today) {
      formErrors.date = "Date can't be before today";
    }
  }
  if (value.time === "") {
    formErrors.time = "Time must be selected";
  }
  if (
    isNaN(parseInt(value.guests)) ||
    parseInt(value.guests) <= 0 ||
    parseInt(value.guests) >= 11
  ) {
    formErrors.guests = "Number of guests must be greater 0 and less 11";
  }
  return { formErrors, hasErrors: !!Object.keys(formErrors).length };
};
