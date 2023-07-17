//テストの点数xによって，成績を出力する。
const x = 87

if (x >= 90) { //90点以上A
       console.log("A")
} else if (x >= 80) { //80点以上90点未満B
       console.log("B")
} else if (x >= 70) { //70点以上80点未満C
       console.log("C")
} else if (x >= 60) { //60点以上70点未満D
       console.log("D")
} else { //60点未満E
       console.log("E")
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
       console.log(`${n}は2の倍数かつ3の倍数である。`)
}

//switch の練習
let rank = Math.floor(Math.random() * 6) + 1;
switch (rank) {
       case 1:
              console.log("Gold");
              break;
       case 2:
              console.log("Silver");
              break;
       case 3:
              console.log("Bronze");
              break;
       case 4:
              console.log("4th");
              break;
       case 5:
              console.log("5th");
              break;
       default:
              console.log("Other");
              break; //最後のbreakは書かなくてもあまり問題ない。
}

let x1;
console.log(x1); //undefined

let x2 = null;
console.log(x2);

if (x1 === undefined) {
       console.log("undefined!")
}

if (x2 === null) {
       console.log("null!")
}


//三項演算子
const age = 20;
const drink = (age >= 20) ? "Beer" : "Cola";
console.log(drink);
