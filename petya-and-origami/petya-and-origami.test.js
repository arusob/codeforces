
const howManyNotebooks = require('./petya-and-origami');

test('Print one number — the minimum number of notebooks that Petya needs to buy ', () => {
    expect(howManyNotebooks(3,5)).toEqual(10)
    expect(howManyNotebooks(15,6)).toEqual(38)
})
