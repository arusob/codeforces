// https://codeforces.com/problemset/problem/131/A

var string = "cAPS";

function firstBigRestSmall(string) {
  let resultLow = string.toLowerCase();
  let firstBig = resultLow[0].toUpperCase();
  let restSmall = resultLow.substr(1, resultLow.length - 1);
  let result = firstBig + restSmall;
  return result;
}

var output = firstBigRestSmall(string);
