
const devideIntoEvenNumbers = require('./watermelon');

test('Print YES, if the boys can divide the watermelon into two parts, each of them weighing even number of kilos; and NO in the opposite case ', () => {
    expect(devideIntoEvenNumbers(8)).toEqual("YES")
    expect(devideIntoEvenNumbers(96)).toEqual("YES")
    expect(devideIntoEvenNumbers(3)).toEqual("NO")
})
