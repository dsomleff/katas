import { DynamicArray } from './index';

describe('Dynamic Array', function () {
    let da: DynamicArray;

    beforeEach(() => {
        da = new DynamicArray(2);
    });

    it('should get and set values', () => {
        da.set(0, "a");
        expect(da.get(0)).toBe('a');
    });
});
