// 라인수를 받아서 삼각형 형태를 출력하는 함수
const rowLength = prompt('row?');
const starsLength = rowLength * 2;
let star = "";

for (let i = 1; i < starsLength; i += 2) {
    for (let c = rowLength; c * 2 > i; c--) {
        star += "1";
    }
    for (let j = 0; j < i; j++) {
        star += "*";
    }
    star += '\n';
}

console.log(star);

/**
 * 일단 된다. 근데 왜 찍히는지는 모르겠다.
 * 난 개발자가 될수 없는걸까
 */