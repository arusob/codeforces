const howManyShops = require('./interesting-drink');

test('Print q integers. The i-th of them should be equal to the number of shops where Vasiliy will be able to buy a bottle of the drink on the i-th day.', () => {
    expect(howManyShops(1)).toEqual(0)
    expect(howManyShops(10)).toEqual(4)
    expect(howManyShops(3)).toEqual(1)
    expect(howManyShops(11)).toEqual(5)
})
