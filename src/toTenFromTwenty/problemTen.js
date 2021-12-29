/*
입력 10 2
출력 5 0 

My suggestion
1.함수에 a,b 파라미터가 주어진다.
    이때, a와 b는 숫자여야한다. 
2.변수 result에 a/b값을 대입한다. 
    이때, result는 문자열이여야함.
3.소수점 인덱스를 찾는다. - indexof() 이용
    *주의: 정수라면 indexof(".")값이 없으므로 -1이 나옴
4.  소수점 인덱스를 기준으로 그 전의 인덱스 = 몫
    소수점 인덱스를 기준으로 그 뒤의 인덱스 = 나머지 
5. 몫과 나버지를 각각 출력한다. 
  */


/*result는 solution 함수안에서 선언한 변수인데 findReminder함수안에서 재선언안해도 되는건가?
findReminder 함수가 어차피 solution 함수 안에 있으니까?? */

solution = () => {
    parseInt(a, b);
    let result;
    let quotient;
    let reminder;
    result = a/b;
    String(result);
    let index = indexof(".");
    if (index=-1) {
        return result;
    } else {
        for(let i=0; i>result.length; i++){
            if(index>i) {
                quotient += result[i]
            } else if(index==i) {
                continue;
            } 
            else { 
                reminder += result[i]
            }
        }
    }
    console.log("출력 :", quotient, reminder)
}


solution(a, b);
export default solution;   


