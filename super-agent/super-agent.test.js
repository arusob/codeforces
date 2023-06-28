
const isThePasswordSymmetric = require('./super-agent');

test('Print YES if the password is symmetric with respect to the central button of the terminal and NO otherwise.', () => {
    expect(isThePasswordSymmetric(".XX...XX.")).toEqual("YES")
    expect(isThePasswordSymmetric("X.XX.....")).toEqual("NO")
})
