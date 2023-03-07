// https://codeforces.com/problemset/problem/1679/A

var wheels = 24;
var busSixWheels = 6;
var busFourWheels = 4;
function checkNumber(wheels) {
  if (wheels % busSixWheels === 0 && wheels % busFourWheels !== 0) {
    return numDivisibleBySix(wheels);
  } else if (wheels % busFourWheels === 0 && wheels % busSixWheels !== 0) {
    return divisibleByFour;
  } else if (wheels % busSixWheels === 0 && wheels % busFourWheels === 0) {
    var numDeivisbleBySixAndFour = [divisibleBySix, divisibleByFour];
    return numDeivisbleBySixAndFour;
  } else if (wheels % 4 !== 0 && wheels % 6 !== 0) {
    return -1;
  }
}
function numDivisibleBySix(wheels) {
  var min = wheels / busSixWheels;
  return min;
}
var divisibleBySix = numDivisibleBySix(wheels);
function numDivisibleByFour(wheels) {
  var max = wheels / busFourWheels;
  return max;
}
var divisibleByFour = numDivisibleByFour(wheels);
var result = checkNumber(wheels);
