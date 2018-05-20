const main = require('../main/main');

describe('taxi fee', function () {
    it('should return 6 if distance is less than 2km, and taxi driver didn\'t wait', () => {
        expect(main(0, 0)).toBe(6);
        expect(main(1, 0)).toBe(6);
        expect(main(1.5, 0)).toBe(6);
    });

    it('should charge for 0.8/km if distance is more than 2km and less than 8km', () => {
        expect(main(2, 0)).toBe(6);
        expect(main(3, 0)).toBe(6.8);
        expect(main(8, 0)).toBe(10.8);
    })
});
