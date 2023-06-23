
function minimumnNumberOfMoves(numberOfDisks, originalState, combinationThatOpens) {
  const disk = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const stringOrginalState = originalState.toString();
  const stringCombinationThatOpens = combinationThatOpens.toString();
  let moves = 0;
  for (let i = 0; i <= numberOfDisks; i++) {
    let digitOrginalState = stringOrginalState.charAt(i);
    let digitThatOpen = stringCombinationThatOpens.charAt(i);
    let numberOfMoves = Math.abs(digitOrginalState - digitThatOpen);
    let otherPlacesOfDisk = disk.length - numberOfMoves;
    if (numberOfMoves < otherPlacesOfDisk) {
      moves += numberOfMoves;
    }
    if (otherPlacesOfDisk < numberOfMoves) {
      moves += otherPlacesOfDisk;
    }
    if (numberOfMoves == otherPlacesOfDisk) {
      moves += numberOfMoves;
    }
  }
  return moves;
}

module.exports = minimumnNumberOfMoves;
