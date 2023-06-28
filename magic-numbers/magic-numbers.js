
function analyzeString(value) {
  const antyMagic = [0, 2, 3, 5, 6, 7, 8, 9, 444];
  let antyMagicLength = antyMagic.length;
  let valueStr = value.toString();
  if (valueStr.charAt(0) != "1") {
    return "NO";
  }
  for (let i = 0; i <= antyMagicLength - 1; i++) {
    let antyMagicStr = antyMagic[i];
    if (valueStr.includes(antyMagicStr)) {
      return "NO";
    }
    if (
      i === antyMagicLength - 1 &&
      !valueStr.includes(antyMagicStr) &&
      valueStr.charAt(0) === "1"
    ) {
      return "YES";
    }
  }
}

module.exports = analyzeString;
