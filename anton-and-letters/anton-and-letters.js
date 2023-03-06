// Problem - 443A - Codeforce
// https://codeforces.com/problemset/problem/443/A

let charaters = "{a, b, c, a, b}"
function numberOfDistinctLetters(charaters)  {
  let selectDuplicates = ""
  function deleteSigns () {
    deleteLeftBrace = charaters.replace('{','')
    deleteRightBrace = deleteLeftBrace.replace('}','')
    removeCommas = deleteRightBrace.replaceAll(', ','')
    }
  deleteSigns()
  for (i=0; i<=removeCommas.length; i++){
    if (!selectDuplicates.includes(removeCommas.charAt(i))){
      selectDuplicates += removeCommas.charAt(i)
    }
  }
  return selectDuplicates.length
}
var distinctLetters = numberOfDistinctLetters(charaters) 
console.log(distinctLetters)
