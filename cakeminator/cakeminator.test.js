
const calculate = require('./cakeminator');

test('Output the maximum number of cake cells that the cakeminator can eat', () => {
    expect(calculate(["s...", "....", "..s."])).toEqual(8)
})
