import solution from "../../src/toOneFromTen/problemTwo";

let arr = [200, 100, 300];

test("Array value same as [1, 200, 100, 300].", () => {
  expect(solution(arr)).toEqual([1, 200, 100, 300]);
});
