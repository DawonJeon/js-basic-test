// 입력 5

// 출력
/*  i  -  2*i-1
 *  
 ***  
 *****  
 *******  
 *********  
도형(별표를) 2*i-1만큼 추가하고싶어 어떻게?
***
1. 함수 makestar(별)
2. 홀수개만큼 증가시키면서 뽑고싶음 (조건9에서 종료)
 */


const solution = () => {
    let tree="";
    for (let i = 1; i < 10; i += 2) { // 1,3,5,7,9
        for (let j=1; j <= i; j++) {  // 1 2 3 
            tree += "*"; 
        }
        tree += "\n";  //숙제 : 여기에다가 console.log(tree)넣으면 왜 큰트리가 나올까? 2차원배열? 3차원배열?
    } 
    console.log(tree)
}


solution();
export default solution;

// console.log("Hello \nmy name is raven");
