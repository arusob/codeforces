
const checkWhoItIs = require('./boy-or-girl');

test('print "CHAT WITH HER!" (without the quotes), otherwise, print "IGNORE HIM!"', () => {
    expect(checkWhoItIs("wjmzbmr")).toEqual("CHAT WITH HER!")
    expect(checkWhoItIs("xiaodao")).toEqual("IGNORE HIM!")
    expect(checkWhoItIs("sevenkplus")).toEqual("CHAT WITH HER!")
})
