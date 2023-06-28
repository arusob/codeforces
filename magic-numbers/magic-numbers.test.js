
const nalyzeString= require('./magic-numbers');

test('Print "YES" if n is a magic number or print "NO" if its not', () => {
    expect(nalyzeString(114114)).toEqual("YES")
    expect(nalyzeString(1111)).toEqual("YES")
    expect(nalyzeString(441231)).toEqual("NO")
})
