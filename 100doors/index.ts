const passes = 3;
const openDoor = '@';
const closedDoor = '#';

let doors = [];

while (doors.length < 100) {
    doors.push(closedDoor);
}

let firstPassResult: string[] = [];
let secondPassResult: string[] = [];
let thirdPassResult: string[] = [];

function getDoors(doors: string[]): void {
    for (let pass = 1; pass <= passes; pass++) {
        for (let i = 0; i < doors.length; i++) {
            if (pass === 1) {
                doors[i] = openDoor;
                firstPassResult.push(doors[i]);
            }
            if (pass === 2 ) {
                i % 2 !== 0 ? doors[i] = openDoor : doors[i] = closedDoor;
                secondPassResult.push(doors[i]);
            }
            if (pass === 3 ) {
                if ((i + 1) % 3 === 0) {
                    doors[i] = doors[i] === openDoor ? closedDoor : openDoor;
                }
                thirdPassResult.push(doors[i]);
            }
        }
    }
}

getDoors(doors);

module.exports = {firstPassResult, secondPassResult, thirdPassResult, openDoor, closedDoor};
export {};
