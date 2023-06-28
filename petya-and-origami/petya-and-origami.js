
function howManyNotebooks(n, k) {
  const red = 2;
  const green = 5;
  const blue = 8;
  const numRedSheets = n * red;
  const numGreenSheets = n * green;
  const numBlueSheets = n * blue;
  const numRedNotebooks = numRedSheets / k;
  const numGreenNotebooks = numGreenSheets / k;
  const numBlueNotebooks = numBlueSheets / k;
  const redResults = Math.ceil(numRedNotebooks);
  const greenResults = Math.ceil(numGreenNotebooks);
  const blueResults = Math.ceil(numBlueNotebooks);
  return redResults + greenResults + blueResults;
}

module.exports =  howManyNotebooks;
