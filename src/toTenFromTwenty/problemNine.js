
/* 
a의 b승을 구하는 프로그램

My suggestion
1. solution함수 파라미터에 a,b두수가 주어진다
2. a를 b번 곱한다 -어떻게????
    ex) 8의 5승 = 8 x 8 x 8 x 8 x 8;
    a x a의 과정이 b-1번 실행된다.
    result=1
    result *= a (1번실행)
    그다음 solution함수가 4번실행된다
    solution(a,b-1)
    언제까지? b=1이 되면 멈춘다.

    만약 b가 1이라면?
    result=1*a 

3. 결과값을 return한다.*/


solution = (a, b) => {

    let result = 1;
    result *= a;
    
    if (b == 1){
        return result;    //b가 1이되면 멈춘다
    } else{
    solution(a,b-1)
    }
}

solution(a, b);
export default solution;    