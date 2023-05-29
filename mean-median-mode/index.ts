function getMean(arr: number[]) {} // logic to calculate Mean
function getMedian(arr: number[]) {} // logic to calculate Median
function getMode(arr: number[]){} // logic to calculate Mode
function meanMedianMode(arr: number[]): void {
    getMean(arr);
    getMedian(arr);
    getMode(arr);
}

console.log(meanMedianMode([9, 10, 23, 10, 23, 9]));

// meanMedianMode([1,2,3,4,5,4,6,1]);
// {
//     mean: 3.25
//     median: 3.5
//     mode: ['1', '4']
// }
//
// meanMedianMode([9, 10, 23, 10, 23, 9]);
// {
//     mean: 14
//     median: 10
//     mode: []
// }
