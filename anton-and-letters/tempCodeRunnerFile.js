var charaters = "{a, b, c, a, b}"

function deleteSigns (charaters) {
  var deleteLeftBrace = charaters.replace('{','')
  var deleteRightBrace = deleteLeftBrace.replace('}','')
  var removeCommas = deleteRightBrace.replaceAll(', ','')
  return removeCommas
  }
deleteSigns(charaters)
//console.log(deleteSigns(charaters))

function numberOfDistinctLetters(removeCommas)  {
  let selectDuplicates = ""
  
  for (i=0; i<=removeCommas.length; i++){
    if (!selectDuplicates.includes(removeCommas.charAt(i))){
      selectDuplicates += removeCommas.charAt(i)
    }
  }
  return selectDuplicates.length
}

var distinctLetters = numberOfDistinctLetters(removeCommas) 
console.log(distinctLetters)