import { sortPeople } from "./index";

describe("Sort People", () => {
  it("should sort people by heights in descending order", () => {
    const names = ["John", "Jane", "Doe"];
    const heights = [170, 180, 160];
    const expected = ["Jane", "John", "Doe"];
    const result = sortPeople(names, heights);
    expect(result).toEqual(expected);
  });

  it("should return an empty array if both names and heights are empty", () => {
    const names: [] = [];
    const heights: [] = [];
    const expected: [] = [];
    const result = sortPeople(names, heights);
    expect(result).toEqual(expected);
  });

  it("should handle arrays with a single element", () => {
    const names = ["John"];
    const heights = [170];
    const expected = ["John"];
    const result = sortPeople(names, heights);
    expect(result).toEqual(expected);
  });

  it("should handle arrays with elements of the same height", () => {
    const names = ["John", "Jane", "Doe"];
    const heights = [170, 170, 170];
    const expected = ["John", "Jane", "Doe"];
    const result = sortPeople(names, heights);
    expect(result).toEqual(expected);
  });

  it("should sort people with the same name but different heights", () => {
    const names = ["John", "John", "John"];
    const heights = [170, 180, 160];
    const expected = ["John", "John", "John"];
    const result = sortPeople(names, heights);
    const expectedHeights = [180, 170, 160];
    expect(result).toEqual(expected);
    expect(heights).toEqual(expectedHeights);
  });
});
