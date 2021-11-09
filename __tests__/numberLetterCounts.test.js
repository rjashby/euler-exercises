import NumberLetter from "../src/numberLetterCounts.js";

describe("NumberLetter", () => {
  test("It should store the input number as input", () => {
    let foo = new NumberLetter(1);
    expect(foo.input).toEqual(1);
  });

  test("It should store the output as false if not given a number", () => {
    let foo = new NumberLetter("bacon");
    expect(foo.output).toEqual(false);
  });

  test("NumberLetter.inputToDigits should return false if not given a number", () => {
    let foo = new NumberLetter(1);
    expect(foo.inputToDigits("bacon")).toEqual(false);
  });

  test("NumberLetter.inputToDigits should return an array of digits from the input number", () => {
    let foo = new NumberLetter(123);
    expect(foo.inputToDigits(123)).toEqual(["1", "2", "3"]);
  });
});