// https://codeforces.com/problemset/problem/330/A

var badCell = "s";
var goodCell = ".";
var input = ["s...", "....", "..s."];

function analyzeColumn(input) {
  var word = input[0];
  let arrayColumns = [];
  let arrBadColumns = [];
  let whichColumnsNumberAreBad = [];
  let arrGoodColumns = [];
  let whichColumnsNumberAreGood = [];
  for (let i = 0; i <= word.length - 1; i++) {
    let singleColumn = "";
    for (let j = 0; j <= input.length - 1; j++) {
      let thisWord = input[j];
      let thisLetter = thisWord[i];
      singleColumn += thisLetter;
    }
    if (singleColumn.includes(badCell)) {
      arrBadColumns.push(singleColumn);
      whichColumnsNumberAreBad.push(i);
    } else {
      arrGoodColumns.push(singleColumn);
      whichColumnsNumberAreGood.push(i);
    }
    arrayColumns.push(singleColumn);
  }
  let oneGoodColumn = arrGoodColumns[0];
  let numberOfGoodColumns = arrGoodColumns.length;
  let numberOfCellsFromGoodColumns =
    arrGoodColumns.length * oneGoodColumn.length;
  return [numberOfCellsFromGoodColumns, numberOfGoodColumns];
}

function analyzeRows(input) {
  let arrBadRows = [];
  let whichLineNumbersAreBad = [];
  let arrGoodRows = [];
  let whichLineNumbersAreGood = [];
  for (let i = 0; i <= input.length - 1; i++) {
    var str = input[i];
    if (str.includes(badCell)) {
      arrBadRows.push(str);
      whichLineNumbersAreBad.push(i);
    } else {
      arrGoodRows.push(str);
      whichLineNumbersAreGood.push(i);
    }
  }
  let numberOfCellsFromGoodRows = whichLineNumbersAreGood.length * str.length;
  let numberOfGoodRows = arrGoodRows.length;
  return [numberOfCellsFromGoodRows, numberOfGoodRows];
}

function calculate(input) {
  var columns = analyzeColumn(input);
  var rows = analyzeRows(input);

  if (rows[1] > columns[1]) {
    var repetitions = rows[1];
  } else if (rows[1] < columns[1]) {
    var repetitions = columns[1];
  } else if (rows[1] === columns[1]) {
    var repetitions = columns[1];
  }
  let output = columns[0] + rows[0] - repetitions;
  return output;
}

var output = calculate(input);
