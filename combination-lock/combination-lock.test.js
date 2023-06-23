
const minimumnNumberOfMoves = require('./combination-lock');

test('Print a single integer — the minimum number of moves Scrooge McDuck needs to open the lock', () => {
    expect(minimumnNumberOfMoves(5, 82195, 64723)).toEqual(13)
})
