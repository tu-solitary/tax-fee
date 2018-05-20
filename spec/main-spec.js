const main = require('../main/main');

describe('taxi fee', function () {
    it('should return 6 if distance is less than 2km, and taxi driver didn\'t wait', () => {
        expect(main(0, 0)).toBe(6);
        expect(main(1, 0)).toBe(6);
        expect(main(1.5, 0)).toBe(6);
    });

    it('should charge for 0.8/km if distance is more than 2km and less than 8km', () => {
        expect(main(2, 0)).toBe(6);
        expect(main(3, 0)).toBe(7);
        expect(main(8, 0)).toBe(11);
    });

    it('should charge for 50% more if distance is further than 8km', () => {
        expect(main(9, 0)).toBe(12);
        expect(main(10, 0)).toBe(13); // 6 + 8 * 0.8 + 2 * 0.4
    });
    it('should charge 0.25 per minute if taxi have waittng time', () => {
        expect(main(0, 10)).toBe(9);
        expect(main(2, 10)).toBe(9);
        expect(main(10, 10)).toBe(16);

    })
});
