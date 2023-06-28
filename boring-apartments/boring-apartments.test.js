
const countBoringNumbers = require('./boring-apartments');

test('For each test case, print the answer: how many digits our character pressed in total', () => {
    expect(countBoringNumbers(22)).toEqual(13)
    expect(countBoringNumbers(9999)).toEqual(90)
    expect(countBoringNumbers(1)).toEqual(1)
    expect(countBoringNumbers(777)).toEqual(66)
})
