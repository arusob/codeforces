
function howManyDaysToEndSocks(input) {
  const n = input[0];
  const m = input[1];
  if (n >= 1 && n <= 100 && m >= 2 && m <= 100) {
    const maxDaysStart = n + Math.floor(n/m);
    const maxDaysEnd = maxDaysStart - n;
    return Math.floor(maxDaysEnd/m) + maxDaysStart;
  }
}

module.exports =  howManyDaysToEndSocks;
