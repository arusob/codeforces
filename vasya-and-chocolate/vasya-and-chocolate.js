// https://codeforces.com/problemset/problem/1065/A

const input = [10, 3, 1, 1];

function maximumPossibleNumberOfChocolateBars(input) {
  const roubles = input[0],
    barsBuyToUseSpecialOffer = input[1],
    barsForFree = input[2],
    costOfOneBar = input[3];
  const numberOfPaidBars = Math.floor(roubles / costOfOneBar);
  const maximumNumberOfPackets = Math.floor(
    roubles / (barsBuyToUseSpecialOffer * costOfOneBar)
  );
  const allBarsForFree = maximumNumberOfPackets * barsForFree;
  return numberOfPaidBars + allBarsForFree;
}

var output = maximumPossibleNumberOfChocolateBars(input);
