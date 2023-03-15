// https://codeforces.com/problemset/problem/236/A

let username = "xiaodao";

function checkWhoItIs(username) {
  let addCharaters = "";
  for (let i = 0; i <= username.length; i++) {
    if (!addCharaters.includes(username.charAt(i))) {
      addCharaters += username.charAt(i);
    }
  }
  if (addCharaters.length % 2 === 0) {
    return "CHAT WITH HER!";
  }
  return "IGNORE HIM!";
}
var boyOrGirl = checkWhoItIs(username);
