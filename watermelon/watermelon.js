// https://codeforces.com/problemset/problem/4/A

const w = 96; 

function devideIntoEvenNumbers(w) {
    return (w >= 4 && w <= 100 && w % 4 == 0) ? "YES" : "NO"
}

var output = devideIntoEvenNumbers(w)
