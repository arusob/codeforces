
const checknumber = require('./avto-bus');

test('Print two integers minimum and maximum possible number of buses', () => {
    expect(checknumber(24)).toEqual([4,6])
    expect(checknumber(4)).toEqual([1])
    expect(checknumber(7)).toEqual([-1])
});
