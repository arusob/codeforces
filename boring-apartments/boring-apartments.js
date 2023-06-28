
function countBoringNumbers(number) {
  let arrayOfBoringNumbers = [];
  for (let i = 1; i <= 9; i++) {
    let num = i;
    let sign = num.toString();
    let result = "";
    
    for (let j = 0; j <= 3; j++) {
      result += sign;
      if (result * 1 === number) {
        arrayOfBoringNumbers.push(result);
        break;
      }
      arrayOfBoringNumbers.push(result);
    }
    if (result * 1 === number) {
      break;
    }
  }
  let longString = "";
  for (let i = 0; i <= arrayOfBoringNumbers.length - 1; i++) {
    longString += arrayOfBoringNumbers[i];
  }
  return longString.length;
}

module.exports = countBoringNumbers;
