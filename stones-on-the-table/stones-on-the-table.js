// https://codeforces.com/problemset/problem/266/A

var stones = 5, colorsOfTheStones = "RRRRR";

function howManyColorsTheSame (stones, colorsOfTheStones) {
    let theSameColors = 0
    for(let i=0; i<=stones-1; i++) {
        if (colorsOfTheStones.charAt(i) == colorsOfTheStones.charAt(i+1)) {
            theSameColors += 1
        }
    } 
    return theSameColors
}

var output = howManyColorsTheSame (stones, colorsOfTheStones)
