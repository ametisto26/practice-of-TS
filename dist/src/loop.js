"use strict";
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
const chars = ["a", "b", "c", "d"];
for (let i = 0; i < chars.length; i++) {
    console.log(chars[i]);
}
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
let i = 1;
while (i <= 3) {
    console.log(i);
    i++;
}
let j = 1;
while (j <= 10) {
    console.log(j);
    if (j === 5) {
        break;
    }
    j++;
}
//do while
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 3);
//for ... of
const capChars = ["A", "B", "C", "D", "E", "F"];
for (const capChar of capChars) {
    console.log(capChar);
}
const lang = "Esperanto";
for (const char of lang) {
    console.log(char);
}
const scores = [100, 90, 80, 70, 60];
let sum = 0;
for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}
const ave = sum / scores.length;
console.log(`合計点は${sum}，平均点は${ave}である。`);
//# sourceMappingURL=loop.js.map