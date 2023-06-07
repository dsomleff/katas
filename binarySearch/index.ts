// const isPresent = (sortedHaystack: number[], midValue: number): any => {
//     let halfHaystack: number[];
//     console.log({sortedHaystack})
//     console.log({midValue});
//
//
//     if (needle > midValue) {
//         halfHaystack = sortedHaystack.filter(index => index > midValue);
//     } else {
//         halfHaystack = sortedHaystack.filter(index => index < midValue);
//     }
//     let newMid = halfHaystack[Math.floor((halfHaystack.length - 1) / 2)];
//
//     if (halfHaystack.length >= 2) {
//         isPresent(halfHaystack, newMid);
//     } else {
//         return newMid ? newMid === needle : midValue === needle;
//     }
// }

function binarySearch(haystack: number[], needle: number): any {
    const sortedHaystack = haystack.sort((a, z) => a - z);
    let first = sortedHaystack[0];
    let last = sortedHaystack[sortedHaystack.length - 1];
    let low = sortedHaystack.indexOf(first);
    let high = sortedHaystack.indexOf(last);
    // console.log({ low })
    // console.log({ high })
                                //2 + (71 - 2) / 2
                                // 0 + (8 - 0) / 2
    // let midPoint = Math.floor(low + (high - low) / 2);
    // let midPoint = sortedHaystack[Math.floor((sortedHaystack.length - 1) / 2)];
    // // console.log({ midPoint })
    // if (midPoint === needle) {
    //     return true
    // } else if (midPoint < needle) {
    //     console.log(12)
    // }

    do {
        let midValue = sortedHaystack[Math.floor(low + (high - low) / 2)];
        console.log({ midValue });
        if (midValue === needle) {
            return true;
        } else if ( midValue > needle  ) {
            low = sortedHaystack.indexOf(midValue + 1);
        } else {
            high = midValue;
        }
    } while (low < high) {
        return false;
    }
}

const haystack = [5, 7, 2, 16, 36, 39, 42, 56, 71];
const needle = 56;

console.log(binarySearch(haystack, needle));

// [ 2,  5,  7, 16, 36, 39, 42, 56, 71 ]
