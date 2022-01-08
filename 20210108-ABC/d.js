function slice(arr, start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        // console.log("i", i);
        // console.log(arr[i]);
        result.push(arr[i]);
    }
    return result;
}

function selectionSort(list) {
    let n = list.length;
    for (let i = 0; i < n; i++) {
        let minIndex = i; // i番目の値を暫定の最小値とします。
        for (let j = i + 1; j < n; j++) {
            if (list[j] <= list[minIndex]) {
                // 暫定の最小値以下なら最小値を更新
                minIndex = j; // 最小値を持つ
            }
        }
        // list[i]とA[minIndex]の入れ替え
        temp = list[i];
        list[i] = list[minIndex];
        list[minIndex] = temp;
    }
    return list;
}

// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    const [n, k] = input[0].split(" ").map((str) => Number(str));
    const pArray = input[1].split(" ").map((str) => Number(str));
    const temp = pArray.slice(0, k).sort((a, b) => a - b);
    // console.log(temp);

    for (let i = k; i <= n; i++) {
        temp.push(pArray[i - 1]);
        // const sorted = selectionSort(temp);
        // console.log("pArray", pArray);
        // console.log("sliced", sliced);
        // console.log("sorted", sorted);
        console.log("%d", temp.sort((a, b) => a - b)[i - 1 - (k - 1)]);
    }
}

// Main(`11 5
// 3 7 2 5 11 6 1 9 8 10 4`);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
