import {DynamicArray} from './index';

describe('Dynamic Array', function () {
    beforeEach(() => {
        const array = new DynamicArray(2);
    });

    it('should get and set values', () => {
        array.set(0, "a");
        expect(array.get(0)).toBe('a');
    });
});
