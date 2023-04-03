// https://codeforces.com/problemset/problem/706/B

var input = 11

function howManyShopsCanDrink (numberOfCoinsToSpent) {
    const pricesOfTheBootles = [3, 10, 8, 6, 11] 
    var numberOfCoinsToSpent 
    let numberOfShopWhereCanBuy = 0
    for(x=0; x <= pricesOfTheBootles.length; x++) {
        if (numberOfCoinsToSpent >= pricesOfTheBootles[x]) {            
            numberOfShopWhereCanBuy += 1 
        }
    } 
    return numberOfShopWhereCanBuy;
}

var output = howManyShopsCanDrink (input)
