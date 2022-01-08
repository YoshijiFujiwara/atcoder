class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // 他の点との距離
    getDistance(another) {
        return Math.sqrt(
            Math.pow(this.x - another.x, 2) + Math.pow(this.y - another.y, 2)
        );
    }
}

// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    tmp = input[1].split(" ");
    //文字列から10進数に変換するときはparseIntを使います
    const numOfPoints = parseInt(input[0], 10);
    const points = [];
    for (let i = 1; i < input.length; i++) {
        const [x, y] = input[i].split(" ");
        points.push(new Point(Number(x), Number(y)));
    }

    let max = -Infinity;
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const distance = points[i].getDistance(points[j]);
            if (max < distance) max = distance;
        }
    }

    //出力
    console.log("%d", max);
}

// Main(`5
// 315 271
// -2 -621
// -205 -511
// -952 482
// 165 463`);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
