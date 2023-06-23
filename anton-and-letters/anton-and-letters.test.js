
const numberOfDistinctLetters = require('./anton-and-letters');

test('Print a single number without duplicate', () => {
    expect(numberOfDistinctLetters('{a,b}')).toEqual(2)
    expect(numberOfDistinctLetters('{a, b, c}')).toEqual(3)
    expect(numberOfDistinctLetters('{b,a,b,a}')).toEqual(2)
    expect(numberOfDistinctLetters('{}')).toEqual(0)
});
 