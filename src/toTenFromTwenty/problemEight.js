/*
평균구하기문제 
입력 : 20 30 40
출력 : 30
*/

/* 
My suggestion
1. solution함수에 파라미터 점수 3과목 입력
2. 공백 무시하고 점수를 배열로 반환
   -split함수를 쓰면 파라미터 기준으로 나누고 배열로 반환
3. array i[0]~i[2]를 하나씩 더하고 array.length로 나눈다.
4. 결과값의 소수점이하는 모두 버린다. -(floor메소드)
5. 결과값을 반환*/


const solution = (korean, math, english) => {
    let array=[korean, math, english];

    let sum=0;
    for (let i=0; i<array.length; i++){
        sum += array[i];
    }
    
    let average = sum/array.length;
    average.floor
    
    return average;
}


solution(korean, math, english);
export default solution;