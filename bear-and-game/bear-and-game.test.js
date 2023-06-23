
const checkWhenIsBoring = require('./bear-and-game');

test('Print the number of minutes Limak will watch the game', () => {
    expect(checkWhenIsBoring([7, 20, 88])).toEqual(35)
    expect(checkWhenIsBoring([16, 20, 30, 40, 50, 60, 70, 80, 90])).toEqual(15)
    expect(checkWhenIsBoring([15, 20, 30, 40, 50, 60, 70, 80, 90])).toEqual(90)
})
