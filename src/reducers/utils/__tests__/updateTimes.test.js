import { updateTimes } from "../updateTimes";

jest.mock("../../../api/fetchAPI", () => {
  return {
    __esModule: true,
    fetchAPI: (data) => ["11:00", "12:00"],
  };
});

describe("updateTimes return correct data", () => {
  it("Expect filter values", () => {
    expect(updateTimes("01-02-2001")).toHaveLength(2);
  });
});
