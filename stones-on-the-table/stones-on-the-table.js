
function howManyColorsTheSame (stones, colorsOfTheStones) {
    let theSameColors = 0
    for(let i=0; i<=stones-1; i++) {
        if (colorsOfTheStones.charAt(i) == colorsOfTheStones.charAt(i+1)) {
            theSameColors += 1
        }
    } 
    return theSameColors
}

module.exports =  howManyColorsTheSame;
