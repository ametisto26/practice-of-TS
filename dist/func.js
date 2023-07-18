"use strict";
function rectangle(height, width) {
    return height * width;
}
console.log(rectangle(3, 8));
function hello() {
    console.log("Hello.");
}
hello();
//関数リテラル
const area = function (length) {
    return length ** 2;
};
console.log(area(5.5));
//アロー函数
const volume = (length) => {
    return length ** 3;
};
console.log(volume(5.5));
const putLength = (length) => console.log(`${length}`);
putLength(5.5);
const aloha = () => console.log("ALOHA!");
aloha();
//コールバック函数の動作確認
//タイマー処理
//3秒経過後に「時間だよん」と表示する。
const displayMessage = () => {
    console.log("時間だよん");
};
setTimeout(displayMessage, 3000);
//デフォルト値の設定
//右側の引数のみに設定可能である。
const totalCost = (price, num = 1) => {
    return price * num;
};
console.log(totalCost(5));
console.log(totalCost(5, 6));
//配列
const colors = ["Red", "Green", "Blue"];
console.log(colors);
const nums = [3, 2, 1];
console.log(nums);
const mixedArr = ["abc", 1, false, [2, "v"]];
console.log(mixedArr);
console.log(colors[0]);
console.log(mixedArr[3]);
console.log(colors.length);
console.log(colors[colors.length - 1]);
const emptyArr = [];
colors.push("Black");
console.log(colors);
colors.unshift("Yellow");
console.log(colors);
colors[1] = "Scarlet";
console.log(colors);
const insertArr = ["a", "b", "c"];
insertArr.splice(1, 0, "D");
console.log(insertArr);
insertArr.splice(2, 0, "X", "Y", "Z");
console.log(insertArr);
insertArr.splice(2, 2);
console.log(insertArr);
insertArr.splice(2, 2, "X", "Y", "Z");
console.log(insertArr);
const arr1 = [0, 1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = arr1.concat(arr2);
console.log(mergedArr);
//# sourceMappingURL=func.js.map