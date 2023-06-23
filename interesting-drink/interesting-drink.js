
function howManyShops (numberOfCoinsToSpent) {
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

module.exports = howManyShops;
