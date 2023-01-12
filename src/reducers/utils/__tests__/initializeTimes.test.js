import { formatDate } from "../../../utils/formatDate";
import { initializeTimes } from "../initializeTimes";

describe("initilizeTimes return correct data", () => {
  it("Expect default values", () => {
    const now = new Date();
    const start = 17;
    const end = 22;
    const length = end - start + 1;
    const data = initializeTimes(now, 17, 22);
    expect(data.availableTimes).toHaveLength(length);
    expect(data.date).toEqual(formatDate(now));
    expect(data.guests).toEqual(1);
    expect(data.time).toEqual("");
  });
});
