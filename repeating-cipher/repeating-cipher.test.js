
const printEnscriptOfString = require('./repeating-cipher');

test('Print such string s that after encryption it equals t ', () => {
    expect(printEnscriptOfString("baabbb")).toEqual("bab")
    expect(printEnscriptOfString("ooopppssss")).toEqual("oops")
    expect(printEnscriptOfString("z")).toEqual("z")
})
