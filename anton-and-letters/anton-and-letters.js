let charaters = "{a, b, c, a, b}"
let selectDuplicate = ""

function deleteSigns () {
  NewCharaters = charaters.replace('{','')
  NewCharaters1 = NewCharaters.replace('}','')
  NewCharaters2 = NewCharaters1.replaceAll(', ','')
  }
deleteSigns()
console.log(NewCharaters2)

for (i=0; i<=NewCharaters2.length; i++){
  // console.log(NewCharaters2.charAt(i))
  if (!selectDuplicate.includes(NewCharaters2.charAt(i))){
    selectDuplicate += NewCharaters2.charAt(i)
  }
}
console.log(selectDuplicate)
console.log(selectDuplicate.length)



// {a,b,c,a,b,a,} -> 3
// Anton wprowadza litery oddzielone przecinkami
// wydrukować liczbę pjedyńczych liter 