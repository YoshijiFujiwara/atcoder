// inputに入力データ全体が入る
function Main(input) {
    // console.log(input);
    // 1行目がinput[0], 2行目がinput[1], …に入る
    // input = input.split("\n");
    //文字列から10進数に変換するときはparseIntを使います
    var t = parseInt(input, 10);

    const result = calc(calc(calc(t) + t) + calc(calc(t)));

    //出力
    console.log("%d", result);
}

// Main(10);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

function calc(x) {
    return Math.pow(x, 2) + x * 2 + 3;
}
