import { useReducer } from "react";
import formArray from "../utils/formArray";
import { formatDate } from "../utils/formatDate";

export const ACTION_CHANGE = "change";

/**
 * Why do we need the Reducer??
 */
const reducer = (state, action) => {
  if (action.type === ACTION_CHANGE) {
    return { ...state, ...action.payload };
  } else {
    return state;
  }
};

const initializeTimes = () => {
  const availableTimes = formArray(17, 22, (i) => `${i}:00`);
  const date = new Date();
  return {
    date: formatDate(date),
    time: "",
    guests: 1,
    occasion: 0,
    availableTimes,
  };
};

export const useBooking = () => {
  return useReducer(reducer, initializeTimes());
};
