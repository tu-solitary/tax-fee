const main = require('../main/main');

describe('taxi fee', function () {
    it('should return 6 if distance is less than 2km, and taxi driver didn\'t wait', () => {
        expect(main(0, 0)).toBe(6);
        expect(main(1, 0)).toBe(6);
        expect(main(1.5, 0)).toBe(6);
    })
});
