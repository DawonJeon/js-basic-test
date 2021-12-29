

var a = 10;
var b = 2;

for (var i=1; i<5; i+=2) {
    a += i;
}

console.log(a+b);

/* 
정답은 2번.
i=1, i=3 a=11;
i=3, i=5 a=14
답은 4
*/ 