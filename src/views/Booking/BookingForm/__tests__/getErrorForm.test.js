import { getErrorForm } from "../getErrorForm";

describe("Validation test", () => {
  it("Check null value", () => {
    expect(getErrorForm(null)).toBeNull();
  });

  it("Check date empty", () => {
    const mockData = {
      date: "",
      time: "11:00",
      guests: "2",
    };
    const { formErrors, hasErrors } = getErrorForm(mockData);
    expect(hasErrors).toBeTruthy();
    expect(Object.keys(formErrors)).toHaveLength(1);
    expect(Object.keys(formErrors)[0]).toBe("date");
  });

  it("Check time exists", () => {
    const mockData = {
      date: "11-12-2100",
      time: "",
      guests: "2",
    };
    const { formErrors, hasErrors } = getErrorForm(mockData);
    expect(hasErrors).toBeTruthy();
    expect(Object.keys(formErrors)).toHaveLength(1);
    expect(Object.keys(formErrors)[0]).toBe("time");
  });

  it("Check guests exists", () => {
    const mockData = {
      date: "11-12-2100",
      time: "11:00",
      guests: "",
    };
    const { formErrors, hasErrors } = getErrorForm(mockData);
    expect(hasErrors).toBeTruthy();
    expect(Object.keys(formErrors)).toHaveLength(1);
    expect(Object.keys(formErrors)[0]).toBe("guests");
  });

  it("Check guests higher 10", () => {
    const mockData = {
      date: "11-12-2100",
      time: "11:00",
      guests: "11",
    };
    const { formErrors, hasErrors } = getErrorForm(mockData);
    expect(hasErrors).toBeTruthy();
    expect(Object.keys(formErrors)).toHaveLength(1);
    expect(Object.keys(formErrors)[0]).toBe("guests");
  });

  it("Check guests less 1", () => {
    const mockData = {
      date: "11-12-2100",
      time: "11:00",
      guests: "0",
    };
    const { formErrors, hasErrors } = getErrorForm(mockData);
    expect(hasErrors).toBeTruthy();
    expect(Object.keys(formErrors)).toHaveLength(1);
    expect(Object.keys(formErrors)[0]).toBe("guests");
  });

  it("Check empty fields", () => {
    const mockData = {
      date: "",
      time: "",
      guests: "",
    };
    const { formErrors, hasErrors } = getErrorForm(mockData);
    expect(hasErrors).toBeTruthy();
    expect(Object.keys(formErrors)).toHaveLength(3);
    expect(Object.keys(formErrors)).toContain("time");
    expect(Object.keys(formErrors)).toContain("date");
    expect(Object.keys(formErrors)).toContain("guests");
  });

  it("Check date greater or equal today", () => {
    const date = "11-11-2022";
    const mockDate = new Date(date);
    const spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate);

    const mockData = {
      date,
      time: "11:00",
      guests: "2",
    };
    const { formErrors, hasErrors } = getErrorForm(mockData);
    expect(hasErrors).toBeFalsy();
    expect(Object.keys(formErrors)).toHaveLength(0);
    spy.mockRestore();
  });

  it("Check date less then today", () => {
    const mockData = {
      date: "10-10-2020",
      time: "11:00",
      guests: "2",
    };
    const { formErrors, hasErrors } = getErrorForm(mockData);
    expect(hasErrors).toBeTruthy();
    expect(Object.keys(formErrors)).toHaveLength(1);
  });
});
