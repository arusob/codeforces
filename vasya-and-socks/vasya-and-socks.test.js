
const howManyDaysToEndSocks = require('./vasya-and-socks');

test('Print a single integer — the answer to the problem ', () => {
    expect(howManyDaysToEndSocks([2, 2])).toEqual(3)
    expect(howManyDaysToEndSocks([9, 3])).toEqual(13)
})
