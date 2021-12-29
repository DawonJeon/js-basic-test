import solution from "../../src/toTenFromTwenty/problemEight";


korean=80;
math=90;
enlgish=100;

test("Array value same as 90.", () => {
  expect(solution(80, 90, 100)).toEqual(90);
});