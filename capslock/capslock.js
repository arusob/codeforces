
function firstBigRestSmall(string) {
  let resultLow = string.toLowerCase();
  return resultLow[0].toUpperCase() + resultLow.substr(1, resultLow.length - 1);
}

module.exports = firstBigRestSmall;
