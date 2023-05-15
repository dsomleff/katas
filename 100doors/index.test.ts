import { firstPassResult, secondPassResult, thirdPassResult, openDoor, closedDoor} from './index';

const dataToCompareThirdResult = '#@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@###@@@';

describe('Doors', () => {
    it('should be open on 1st pass', () => {
        for (let char of firstPassResult) {
            expect(char === '@').toBe(true);
        }
    });

    it ('should be closed on every second door after 2d pass', () => {
        for (let i = 0; i < secondPassResult.length; i++) {
            (i + 1) % 2 !== 0
                ? expect(secondPassResult[i] === closedDoor).toBe(true)
                : expect(secondPassResult[i] === openDoor).toBe(true);
        }
    });

    it('should be if the door is closed you open it, it if is open you close it after 3rd pass', () => {
        expect(thirdPassResult.join('')).toEqual(dataToCompareThirdResult);
    });
})
