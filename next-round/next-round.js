// https://codeforces.com/problemset/problem/158/A

var qualification = "8 5";
var participants = "10 9 8 7 7 7 5 5";

function makeArr(arguments) {
  let argumentsArray = arguments.split(" ");
  argumentsArray.forEach((el, i, arr) => (arr[i] = el * 1));
  return argumentsArray;
}

var arrQuali = makeArr(qualification);
var arrParti = makeArr(participants);

function analyzeParti(arrQuali, arrPartiNums) {
  let advanceNextRound = [];
  for (let i = 0; i <= arrPartiNums.length - 1; i++) {
    if (arrPartiNums[i] > arrQuali[1]) {
      advanceNextRound.push(arrPartiNums[i]);
    }
  }
  return advanceNextRound.length;
}

var output = analyzeParti(arrQuali, arrParti);
