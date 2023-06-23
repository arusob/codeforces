
const whoDrinksNcola = require('./double-cola');

test('Print the single line — the name of the person who drinks the n-th can of cola', () => {
    expect(whoDrinksNcola(1)).toEqual('Sheldon')
    expect(whoDrinksNcola(6)).toEqual('Sheldon')
    expect(whoDrinksNcola(1802)).toEqual('Penny')
})
