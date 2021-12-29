

/* Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune
 한글 이름 입력 시 영어 이름을 반환하는 프로그램

 My suggestion1
 1. 두개의 배열을 만든다.
 2. planetInKorean [수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성]
 3. planetInEnglish [Mercury, Venus, Earth, Mars, Jupiter, Satrun, Uranus, Neptune]
 4. 행성의 한글 이름을 prompt로 입력하면.
 5. planetInkorean에서 index를 찾아 동일한 index를 planetInEnlgish에서 찾는다
 6. planetInEnglish에서 영어이름 return한다. 
 
 My suggestion2
 1. switch-case문을 이용해서
 2. 한글이름위치가 되면 영어이름으로 바꿔주기

 문제 풀기 위해 공부한 요소
1.arr.include(2) // true or false를 반환
2.indexOf("__") 문자열이 아닌 배열에서도 사용가능? yes
 */
const writePlanet = prompt("행성의 이름을 입력하세요");

//1
solution = () => {
    let planetInKorean = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
    let planetInEnglish = ["Mercury","Venus", "Earth", "Mars", "Jupiter", "Satrun", "Uranus", "Neptune"]

    if (planetInKorean.includes("writePlanet")) {
        let indexNumber = planetInKorean.indexOf("writePlanet");
        console.log(planetInEnglish[indexNumber]);

    } else {
        alert("수성,금성,지구,화성,목성,토성,천왕성,해왕성 내에서 입력하세요.");
    }
}


//2
/*
solution = () => {
    swictch(writePlanet) {
        case "수성"; 
        console.log("Mercury");
        break;

        case "금성";
        console.log("Venus");
        break;

    }
}

불가능 -> why? switch - case에서 우리의 case가 정해지지 않았다.
사용자가 입력하는 행성의 이름이 매번 달라지는데, case에 지정불가능??
*/

solution();
 
