import numberLetter from "../src/numberLetterCounts.js";

describe("numberLetter", () => {
  test("It should output a number if given a number", () => {
    expect(numberLetter(1)).toEqual(3);
  });
  test("It should return false if not given a number", () => {
    expect(numberLetter("bacon")).toEqual(false);
  });
});