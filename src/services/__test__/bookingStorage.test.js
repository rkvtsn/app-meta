import { bookingRemove, bookingSave } from "../bookingStorage";

jest.spyOn(Storage.prototype, "setItem");
jest.spyOn(Storage.prototype, "getItem");
Storage.prototype.setItem = jest.fn();
Storage.prototype.getItem = jest.fn();

const testData = {
  date: "12-11-2022",
  time: "12:00",
  guests: "5",
  occasion: "",
};
describe("Booking in localStorage, default implementations", () => {
  it("Save", () => {
    bookingSave(testData);
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it("Load", () => {
    bookingSave(testData);
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it("Add", () => {
    bookingSave(testData);
    expect(localStorage.getItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it("Remove", () => {
    bookingRemove("1");
    expect(localStorage.getItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
