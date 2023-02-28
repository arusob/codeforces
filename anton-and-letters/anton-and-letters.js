let charaters = "{a, b, c, a, b}"
let selectDuplicate = ""

function deleteSigns () {
  newCharaters = charaters.replace('{','')
  newCharaters1 = newCharaters.replace('}','')
  newCharaters2 = newCharaters1.replaceAll(', ','')
  }
deleteSigns()
for (i=0; i<=newCharaters2.length; i++){
  if (!selectDuplicate.includes(newCharaters2.charAt(i))){
    selectDuplicate += newCharaters2.charAt(i)
  }
}
