function drawStar(n) {
    let star = "";
    const starLength = 2 * n; // 별의 개수

    for (let i = 1; i < starLength; i += 2) {

        for (let j = 0; j < i; j++) {
            star += "*";
        }
        star += '\n';
    }

    console.log(star);
}

drawStar(5);

/**
 * 별 찍는중.
 * 자괴감 오진다.
 */