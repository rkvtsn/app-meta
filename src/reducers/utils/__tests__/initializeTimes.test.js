import { formatDate } from "../../../utils/formatDate";
import { initializeTimes } from "../initializeTimes";

jest.mock("../../../api/fetchAPI", () => {
  return {
    __esModule: true,
    fetchAPI: (data) => ["11:00", "12:00"],
  };
});

describe("initilizeTimes return correct data", () => {
  it("Expect default values", () => {
    const now = new Date();
    const data = initializeTimes(now);
    expect(data.availableTimes).toHaveLength(2);
    expect(data.date).toEqual(formatDate(now));
    expect(data.guests).toEqual(1);
    expect(data.time).toEqual("");
  });
});
