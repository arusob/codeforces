// https://codeforces.com/problemset/problem/460/A

var input = [9, 3];

function howManyDaysToEndSocks(input) {
  const n = input[0];
  const m = input[1];
  if (n >= 1 && n <= 100 && m >= 2 && m <= 100) {
    const maxDaysStart = n + Math.floor(n/m);
    const maxDaysEnd = maxDaysStart - n;
    const maxDays = Math.floor(maxDaysEnd/m) + maxDaysStart;
    return maxDays;
  }
}

var output = howManyDaysToEndSocks(input);
