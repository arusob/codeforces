// https://codeforces.com/problemset/problem/673/A

//let tab = [7, 20, 88]   // output 35

const boringTime = 15;
function checkWhenIsBoring(tab) {
  if (tab[0] <= boringTime) {
    return firstInterestingMinut(tab);
  } else if (tab[0] > boringTime) {
    return boringTime;
  }
}
console.log(checkWhenIsBoring(tab));
function firstInterestingMinut(tab) {
  for (let i = 0; i <= tab.length - 1; i++) {
    var lastEl = tab[tab.length - 1];
    if (tab[i] + boringTime < tab[i + 1]) {
      return tab[i] + boringTime;
    } else if (tab[i] === lastEl) {
      return tab[i];
    }
  }
}
