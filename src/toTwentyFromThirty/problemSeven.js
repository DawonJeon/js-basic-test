/*
입력
Yujin Hyewon
70 100

출력
{'Yujin': 70, 'Hyewon': 100}

My suggestion
1. prompt를 통해 입력된 문자열을 split(" ")을 기준으로 배열로 반환
2. 두개의 배열이 생김 name = [Yujin Hyewon]
    score = [70, 100]
3. 객체를 만든다
4. 객체의 key와 value를 하나씩 대입한다.
name[i] =  score[i] -> for문으로 돌려버려?

문제를 풀기 위해 공부한 함수
split(" ")함수 => " "값을 기준으로 나눠서 배열로 반환 
*/

import solution from "./problemFive";

solution = () => {
    const name = prompt("공백으로 구분하여 학생이름을 입력하세요.");
    const score = prompt("공백으로 구분하여 학생 수학점수를 입력하세요");

    let nameArray=name.split(" ");
    let scoreArray=score.split(" ");
    let newObject = {}

    for(let i=0; i<nameArray.length; i++){
        newObject(nameArray[i]=scoreArrya[i]);
    }
    console.log(newObject);
}

solution();



