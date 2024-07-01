export function sortPeople(names: string[], heights: number[]): string[] {
  let unsortedUntilIndex = heights.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < unsortedUntilIndex; i++) {
      if (heights[i] < heights[i + 1]) {
        sorted = false;
        // Swap elements
        [heights[i], heights[i + 1]] = [heights[i + 1], heights[i]];
        [names[i], names[i + 1]] = [names[i + 1], names[i]];
      }
    }
    unsortedUntilIndex -= 1;
  }
  console.log({ names });
  return names;
}

let names = ["Alice", "Bob", "Bob"],
  heights = [155, 185, 150];
sortPeople(names, heights);
