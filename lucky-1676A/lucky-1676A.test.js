
const ifTheTicketIsLucky = require('./lucky-1676A');

test('Output "YES" if the given ticket is lucky, and "NO" otherwise', () => {
    expect(ifTheTicketIsLucky('213132')).toEqual('YES')
    expect(ifTheTicketIsLucky('973894')).toEqual('NO')
    expect(ifTheTicketIsLucky('045207')).toEqual('YES')
    expect(ifTheTicketIsLucky('000000')).toEqual('YES')
    expect(ifTheTicketIsLucky('055776')).toEqual('NO')

})
