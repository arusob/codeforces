
function numberOfDistinctLetters(charaters) {
  var deleteUnwantedCharacters = charaters.replace("{", "").replace("}", "").replaceAll(" ", "").replaceAll(",", "");
  let selectDuplicates = "";
  for (i = 0; i <= deleteUnwantedCharacters.length; i++) {
    if (!selectDuplicates.includes(deleteUnwantedCharacters.charAt(i))) {
      selectDuplicates += deleteUnwantedCharacters.charAt(i);
    }
  }
  var num = selectDuplicates.length
  return num;
}

module.exports = numberOfDistinctLetters;
