// https://codeforces.com/problemset/problem/510/A

var rows = 9,
  cells = 9;

function drawPattern(rows, cells) {
  let emptyRows = "";
  let snakeCells = "#";
  let emptyCells = "";
  emptyRowsWithSign = "";
  for (let i = 1; i <= cells; i++) {
    emptyRows += "#";
  }
  for (let i = 1; i <= cells - 1; i++) {
    emptyCells += ".";
  }
  let output = "";
  for (let j = 1; j <= rows; j++) {
    emptyRowsWithSignAsLast = emptyCells + snakeCells;
    emptyRowsWithSignAsFirst = snakeCells + emptyCells;
    if (j % 2 != 0) {
      output = output + emptyRows + "\n";
    }
    if (j % 4 == 0) {
      output = output + emptyRowsWithSignAsFirst + "\n";
    }
    if (j % 2 == 0 && j % 4 != 0) {
      output = output + emptyRowsWithSignAsLast + "\n";
    }
  }
  return output;
}

var output = drawPattern(rows, cells);
