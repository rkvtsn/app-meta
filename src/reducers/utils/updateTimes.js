import { fetchAPI } from "../../api/fetchAPI";

/**
 *
 * @param {string[]} availableTimes
 * @param {string} currentDate
 * @returns {string[]} new availableTimes
 */
export const updateTimes = (currentDate) => {
  return fetchAPI(new Date(currentDate));
};
