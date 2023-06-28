
function checkWhenIsBoring(tab) {
  const boringTime = 15;
  if (tab[0] <= boringTime) {
    for (let i = 0; i <= tab.length - 1; i++) {
      var lastEl = tab[tab.length - 1];
      if (tab[i] + boringTime < tab[i + 1]) {
        return tab[i] + boringTime;
      } else if (tab[i] === lastEl) {
        return tab[i];
      }
    }
  } else if (tab[0] > boringTime) {
  return boringTime;
  }
}

module.exports = checkWhenIsBoring;
