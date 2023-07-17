console.log("You're terminated!");

console.log("\¥ \t ABC \n abc \"注意だよ\"");

let color: string = "Red";
console.log(color);
console.log(typeof(color));

const pi = 3.1415926589793;
console.log(pi);
console.log(typeof(pi));

const zero = 0;
console.log(zero);
console.log(typeof(zero));

let b: boolean = true;
console.log(b);
console.log(typeof(b));

b = false;
console.log(b);
console.log(typeof(b));

let num = 26;
console.log(num);
console.log(typeof(num)); //型推論

num += 101;
console.log(num);

const firstName = "John";
const familyName = "Doe";

const message1 = "Hello! I am " + firstName + " " + familyName + ".";
const message2 = `Hello!
I am ${firstName} ${familyName}.`;
console.log(message1);
console.log(message2);

//tsc app.ts -w (-watch)  and vtrl + C
//edit package.json

console.log("Hello lite-server!")
console.log("Hello npm!")

console.log("Hello app.ts!") //second.ts との動作確認用

