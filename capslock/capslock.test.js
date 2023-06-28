
const firstBigRestSmall = require('./capslock');

test('Print the result of the given words processing', () => {
    expect(firstBigRestSmall("cAPS")).toEqual("Caps")
    expect(firstBigRestSmall("Lock")).toEqual("Lock")
})
