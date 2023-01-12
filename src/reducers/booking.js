import { useReducer } from "react";
import { BOOKING_SLOTS } from "./constants";
import { initializeTimes } from "./utils/initializeTimes";
import { updateTimes } from "./utils/updateTimes";

export const ACTION_CHANGE = "change";
export const ACTION_CHANGE_DATE = "change-date";

const reducer = (state, action) => {
  if (action.type === ACTION_CHANGE_DATE) {
    const availableTimes = updateTimes(BOOKING_SLOTS, action.payload.date);
    return {
      ...state,
      availableTimes: [...availableTimes],
      time: !availableTimes.includes(state.time) ? "" : state.time,
      ...action.payload,
    };
  } else if (action.type === ACTION_CHANGE) {
    return { ...state, ...action.payload };
  } else {
    return state;
  }
};

const initState = initializeTimes(new Date(), 17, 22);

export const useBooking = () => {
  return useReducer(reducer, initState);
};
