
const calculateTheTask = require('./lucky-sum-of-digits');

test('Print on the single line the result — the minimum lucky number, whose sum of digits equals n. If such number does not exist, print -1', () => {
    expect(calculateTheTask(11)).toEqual('47')
    expect(calculateTheTask(10)).toEqual('-1')
})
