import { updateTimes } from "../updateTimes";

describe("updateTimes return correct data", () => {
  it("Expect filter values", () => {
    const date1 = "01-01-2000";
    const date2 = "01-02-2001";
    const availableTimes = {
      [date1]: ["11:00", "12:00"],
      [date2]: [],
    };
    expect(updateTimes(availableTimes, date1)).toHaveLength(2);
    expect(updateTimes(availableTimes, date2)).toHaveLength(0);
  });
});
