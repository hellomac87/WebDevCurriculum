/*
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
*/

/**
 * 일단 된다. 근데 왜 찍히는지는 모르겠다.
 * 난 개발자가 될수 없는걸까
 */

var n = prompt('line number?'); // 입력받는 라인의 수
var star = ''; // 출력을 위해 빈 문자열 객체를 star 변수에 저장한다
// 규칙을 찾는다
/*
공백 별 줄바꿈
2   1   1
1   3   1
0   5   1
*/
// 찾을 규칙으로 반복문을 사용하여 출력한다
for (var i = 0; i < n; i++) {

    for (var j = n; i < j; j--) {
        star += ' ';
    }
    for (var s = 0; s < i * 2 + 1; s++) {
        star += '*';
    }

    star += '\n';
}

console.log(star);
