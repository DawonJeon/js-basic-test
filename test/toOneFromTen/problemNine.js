const year = '2019',
    month = '04',
    day = '26',
    hour = '11',
    minute = '34',
    second = '27';

const result;


console.log(result)

// 출력 값 2019/4/26 11:34:27

import solution from "../../src/toOneFromTen/problemNine";


test("Array value same as [2019/04/26 11:34:27].", () => {
  expect(solution()).toEqual(["2019/04/26 11:34:27"]);
});

