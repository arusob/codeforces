// https://codeforces.com/problemset/problem/1433/A

let number = 777;
function countBoringNumbers(number) {
  //console.log("sprawdzam");
  var array = [];
  for (let i = 1; i <= 9; i++) {
    var num = i;
    var sign = num.toString();
    var result = "";
    for (let j = 0; j <= 3; j++) {
      result += sign;
      if (result * 1 === number) {
        array.push(result);
        break;
      }
      array.push(result);
    }
    if (result * 1 === number) {
      break;
    }
  }
  return array;
}
var arrayOfBoringNumbers = countBoringNumbers(number);
function countSingleCharacters(arrayOfBoringNumbers) {
  var longString = "";
  for (let i = 0; i <= arrayOfBoringNumbers.length - 1; i++) {
    longString += arrayOfBoringNumbers[i];
  }
  return longString.length;
}
var numOfClicks = countSingleCharacters(arrayOfBoringNumbers);
