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
//# sourceMappingURL=func.js.map