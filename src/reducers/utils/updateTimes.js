/**
 *
 * @param {string[]} availableTimes
 * @param {string} currentDate
 * @returns {string[]} new availableTimes
 */
export const updateTimes = (bookingSlots, currentDate) => {
  return currentDate in bookingSlots ? bookingSlots[currentDate] : [];
};
