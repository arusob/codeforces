
const maximumPossibleNumberOfChocolateBars = require('./vasya-and-chocolate');

test('Print t lines i-th line should contain the maximum possible number of chocolate bars Vasya can grt i-th test ', () => {
    expect(maximumPossibleNumberOfChocolateBars([10, 3, 1, 1])).toEqual(13)
    expect(maximumPossibleNumberOfChocolateBars([1000000000, 1, 1000000000, 1])).toEqual(1000000001000000000)
})
