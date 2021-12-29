import solution from "../../src/toOneFromTen/problemOne";

var num = [100, 200, 300, 400, 500];

test("Array value same as [100, 200, 300].", () => {
  expect(solution(num)).toEqual([100, 200, 300]);
});

// num.splice(3,1);
// num.splice(3,1);

// console.log(num);

/* 
num = [1,2,3,4,5]
num.splice(2,1)
num = [1,2,4,5]

num.delete[2]
num = [1,2,*,4,5]
*/