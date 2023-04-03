// https://codeforces.com/problemset/problem/109/A

var input = 11;

function calculateTheTask(input) {
  if (input % 7 === 0) {
    let result = devideBySeven(input);
    return result;
  }
  if (input % 4 === 0) {
    let result = devideByFour(input);
    return result;
  } else {
    let result = numberOfSevenAndFour(input);
    return result;
  }
}

function devideBySeven(input) {
  let resultFromDevideBySeven = input / 7;
  let result = "7".repeat(resultFromDevideBySeven);
  return result;
}

function devideByFour(input) {
  let resultFromDevideByFour = input / 4;
  let result = "4".repeat(resultFromDevideByFour);
  return result;
}

function numberOfSevenAndFour(input) {
  let resultString = "";
  var i = 0;
  do {
    let sum = i + 7;
    let rest = input - 7;
    input = input - 7;
    resultString = resultString + sum;
    if (rest % 4 === 0 && rest > 0) {
      let howMuchFours = rest / 4;
      let resultFourString = "4".repeat(howMuchFours);
      let result = resultString + resultFourString;
      let arrResult = result.split("").sort();
      let resultLast = arrResult.join("");
      return resultLast;
    }
    if (rest < 0) {
      let result = "-1";
      return result;
    }
  } while (input > 0);
  return result;
}

var output = calculateTheTask(input);
