// https://codeforces.com/problemset/problem/540/A

var numberOfDisks = 5;
var originalState = 82195;
var combinationThatOpens = 64723;

function minimumnNumberOfMoves(
  numberOfDisks,
  originalState,
  combinationThatOpens
) {
  let disk = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let stringOrginalState = originalState.toString();
  let stringCombinationThatOpens = combinationThatOpens.toString();
  let moves = 0;
  for (let i = 0; i <= numberOfDisks; i++) {
    let digitOrginalState = stringOrginalState.charAt(i);
    let digitThatOpen = stringCombinationThatOpens.charAt(i);
    let firstSolution = Math.abs(digitOrginalState - digitThatOpen);
    let secondSolution = disk.length - firstSolution;
    if (firstSolution < secondSolution) {
      moves += firstSolution;
    }
    if (secondSolution < firstSolution) {
      moves += secondSolution;
    }
    if (firstSolution == secondSolution) {
      moves += firstSolution;
    }
  }
  return moves;
}

var output = minimumnNumberOfMoves(
  numberOfDisks,
  originalState,
  combinationThatOpens
);
