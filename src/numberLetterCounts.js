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

NumberLetter.prototype.digitsToCharCount = function(arrayOfDigits) {

  let ones = arrayOfDigits[arrayOfDigits.length-1];
  if (arrayOfDigits.length >= 2) { let tens = arrayOfDigits[arrayOfDigits.length-2]; }
  if (arrayOfDigits.length >= 3) { let hundreds = arrayOfDigits[arrayOfDigits.length-3]; }
  if (arrayOfDigits.length >= 4) { let thousands = arrayOfDigits[arrayOfDigits.length-4]; }

  let total = 0;
  let teens = false;
  if (tens === '1') {teens = true;}

  //ones 
  switch (ones) {
    case '0':
      if (arrayOfDigits.length === 1) {
        return 4;
      }
      break;
    case '1':
      teens ? total +=6 : total += 3;
      break;
    case '2':
      teens ? total +=6 : total += 3;
      break;
    case '3':
      teens ? total +=8 : total += 5;
      break;
    case '4':
      teens ? total +=8 : total += 4;
      break;
    case '5':
      teens ? total +=7 : total += 4;
      break;
    case '6':
      teens ? total +=7 : total += 3;
      break;
    case '7':
      teens ? total +=9 : total += 5;
      break;
    case '8':
      teens ? total +=9 : total += 5;
      break;
    case '9':
      teens ? total +=8 : total += 4;
      break;
  }

  //tens
  if (typeof tens !== 'undefined') {
    switch (tens) {
      case '0':
        break;
      case '1':
        (ones === '0') ? total += 3 : total += 0;
        break;
      case '2':
        total += 6;
        break;
      case '3':
        total += 6;
        break;
      case '4':
        total +=5;
        break;
      case '5':
        total +=5;
        break;
      case '6':
        total +=6;
        break;
      case '7':
        total +=7;
        break;
      case '8':
        total +=6;
        break;
      case '9':
        total +=6;
        break;
    }
  }

  //hundreds
  if (typeof hundreds !== 'undefined') {
    
    total += 7; // 'hundred'
  }
  //thousands
  if (typeof thousands !== 'undefined') {
    
  }

  if (typeof hundreds !== 'undefined' && !(tens === 0 && ones === 0)) {
    total += 3;
  }

  return total;
}