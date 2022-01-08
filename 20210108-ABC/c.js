// inputに入力データ全体が入る
function Main(input) {
    let k = input;

    let arr = [];
    let iterator = k;
    let i = 0;
    while (i < 5) {
        const p = Math.floor(Math.log2(iterator));
        console.log("p", p);
        iterator = iterator - Math.pow(2, p);
        console.log("iterator", iterator);

        i++;
    }
    console.log(Math.log2(k));
    // console.log(arr);
    // console.log(count);
    //出力
    // console.log("%d %s", a + b + c, s);
}

Main(11);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
