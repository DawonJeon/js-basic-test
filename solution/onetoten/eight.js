/* 객체의 키 이름 중복 */


var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']);

/* 객체의 key가 중복되었을때 뒤에 쓰인 key가 프로퍼티가 된다

답. 'weight':84*/