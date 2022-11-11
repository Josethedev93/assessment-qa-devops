const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('ShuffleArray should exist', () => {
        expect(shuffleArray).toBeDefined();
    });
    const shuffArray = [shuffleArray];
    test('ShuffleArray length should be same length', () => {
        expect(shuffArray).toEqual(expect.arrayContaining(shuffArray));
    });
});