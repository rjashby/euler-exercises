import numberLetter from "../src/numberLetterCounts.js" 
describe("numberLetter", () => {
  test("It should output a number if given a number", () => {
    expect(numberLetter(1)).toEqual(1);
  });
});