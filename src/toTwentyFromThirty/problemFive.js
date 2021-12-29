/* 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어라

My suggestion
1. 원의 넓이 = 반지름 x 반지름 x 3.14
2. 원의 넓이 리턴

*/

solution = (r) => {
    parseInt(r)
    let circle = r*r*3.14
    return circle;  
}


solution(r);

export default solution;