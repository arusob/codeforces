// https://codeforces.com/problemset/problem/1679/A

var wheels = 24;

function checkNumber(wheels) {
  let min = wheels / 6;
  let max = wheels / 4;
  if (wheels % 6 === 0 && wheels % 4 !== 0) {
    return (result = [min]);
  } else if (wheels % 4 === 0 && wheels % 6 !== 0) {
    return (result = [max]);
  } else if (wheels % 6 === 0 && wheels % 4 === 0) {
    return (result = [min, max]);
  } else if (wheels % 4 !== 0 && wheels % 6 !== 0) {
    return (result = [-1]);
  }
  return result;
}

var result = checkNumber(wheels);
