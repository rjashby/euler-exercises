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

  test("NumberLetter.inputToDigits should return false if the input was not a number", () => {
    let foo = new NumberLetter("bacon");
    expect(foo.inputToDigits()).toEqual(false);
  });
});