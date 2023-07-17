"use strict";
//テストの点数xによって，成績を出力する。
const x = 87;
if (x >= 90) { //90点以上A
    console.log("A");
}
else if (x >= 80) { //80点以上90点未満B
    console.log("B");
}
else if (x >= 70) { //70点以上80点未満C
    console.log("C");
}
else if (x >= 60) { //60点以上70点未満D
    console.log("D");
}
else { //60点未満E
    console.log("E");
}
//==は型を考慮せずあいまいに比較する。
//===を使うほうが基本的には望ましい。
const n = 6;
// if (n % 2 === 0) {
//        if (n % 3 === 0) {
//               console.log(`${n}は2の倍数かつ3の倍数である。`)
//        }
// }
if (n % 2 === 0 && n % 3 === 0) {
    console.log(`${n}は2の倍数かつ3の倍数である。`);
}
//# sourceMappingURL=exercise.js.map