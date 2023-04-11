// https://codeforces.com/problemset/problem/1095/A

var str = "ooopppssss";

function printEnscriptOfString(str) {
  let enscript = "";
  for (i = 0; i <= str.length - 1; i++) {
    str = str.substring(i);
    enscript = enscript + str.charAt(0);
  }
  return enscript;
}

var output = printEnscriptOfString(str);
