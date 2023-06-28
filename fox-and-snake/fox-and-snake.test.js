
const drawPattern = require('./fox-and-snake');
const normalizeString = str => str.replace(/\s+/g, '').trim();

test('Output n lines. Each line should contain a string consisting of m characters', () => {
    expect(normalizeString (drawPattern(3,3))).toEqual('###..####')
    expect(normalizeString (drawPattern(3,4))).toEqual('####...#####')
    expect(normalizeString (drawPattern(5,3))).toEqual('###..#####..###')
    expect(normalizeString (drawPattern(9,9))).toEqual('#########........###########........#########........###########........#########')
})
