
const howManyColorsTheSame = require('./stones-on-the-table');

test('Print a single integer — the answer to the problem', () => {
    expect(howManyColorsTheSame(3, "RRG")).toEqual(1)
    expect(howManyColorsTheSame(5, "RRRRR")).toEqual(4)
    expect(howManyColorsTheSame(4, "BRBG")).toEqual(0)
})
