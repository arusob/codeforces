
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

module.exports =  maximumPossibleNumberOfChocolateBars;
