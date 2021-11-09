export default function NumberLetter(number) {
  if (typeof number !== "number") {
    this.input = false;
    this.output = false;
  } else {
    this.input = number;
    this.output = 0;
  }
}

NumberLetter.prototype.inputToDigits = function(number) {
  if (typeof number !== "number") {
    return false;
  }
  return number.toString().split("");
};