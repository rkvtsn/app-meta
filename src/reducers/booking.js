import { useReducer } from "react";
import { bookingSave } from "../utils/bookingStorage";
import { initializeTimes } from "./utils/initializeTimes";
import { updateTimes } from "./utils/updateTimes";

export const ACTION_CHANGE = "change";
export const ACTION_CHANGE_DATE = "change-date";
export const ACTION_SAVE = "SAVE";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_SAVE:
      bookingSave(state);
      return initializeTimes(new Date());
    case ACTION_CHANGE_DATE:
      const availableTimes = updateTimes(action.payload.date);
      return {
        ...state,
        availableTimes: [...availableTimes],
        time: !availableTimes.includes(state.time) ? "" : state.time,
        ...action.payload,
      };
    case ACTION_CHANGE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const initState = initializeTimes(new Date());

export const useBooking = () => {
  return useReducer(reducer, initState);
};
