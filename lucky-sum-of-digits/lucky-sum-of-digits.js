// https://codeforces.com/problemset/problem/109/A

var input = 11;

function calculateTheTask(input) {
  if (input % 7 === 0) {
    return devideBySeven(input);
  }
  if (input % 4 === 0) {
    return devideByFour(input);
  } 
  return numberOfSevenAndFour(input);
}

function devideBySeven(input) {
  let resultFromDevideBySeven = input / 7;
  return "7".repeat(resultFromDevideBySeven);
}

function devideByFour(input) {
  let resultFromDevideByFour = input / 4;
  return "4".repeat(resultFromDevideByFour);
}

function numberOfSevenAndFour(input) {
  let fourSevenString = "";
  var i = 0;
  do {
    let sum = i + 7;
    let rest = input - 7;
    input = input - 7;
    fourSevenString += sum;
    if (rest % 4 === 0 && rest > 0) {
      let howMuchFours = rest / 4;
      let sequenceOfFours = "4".repeat(howMuchFours);
      let result = fourSevenString + sequenceOfFours;
      return result.split("").sort().join("");
    }
    if (rest < 0) {
      return "-1";
    }
  } while (input > 0);

}

var output = calculateTheTask(input);
