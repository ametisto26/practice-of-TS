function rectangle(height: number, width: number): number {
       return height * width;
}

console.log(rectangle(3, 8));

function hello(): void {
       console.log("Hello.");
}

hello();

//関数リテラル
const area = function(length: number): number {
       return length ** 2;
};

console.log(area(5.5));


//アロー函数
const volume = (length: number): number => {
       return length ** 3;
};
console.log(volume(5.5));

const putLength = (length: number) => console.log(`${length}`);
putLength(5.5)

const aloha = (): void => console.log("ALOHA!");
aloha();

//コールバック函数の動作確認
//タイマー処理
//3秒経過後に「時間だよん」と表示する。
const displayMessage = () => {
       console.log("時間だよん");
}
setTimeout(displayMessage, 3000);

//デフォルト値の設定
//右側の引数のみに設定可能である。
const totalCost = (price: number, num: number = 1): number => {
       return price * num;
};
console.log(totalCost(5));
console.log(totalCost(5,6));


//配列
const colors: string[] = ["Red", "Green", "Blue"];
console.log(colors);

const nums = [3, 2, 1];
console.log(nums);

const mixedArr = ["abc", 1, false, [2, "v"]];
console.log(mixedArr);

console.log(colors[0]);
console.log(mixedArr[3]);

console.log(colors.length);
console.log(colors[colors.length - 1]);

const emptyArr: number[] = [];

colors.push("Black")
console.log(colors);

colors.unshift("Yellow")
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

//オブジェクト（連想配列）の例
const user = {
       name: "J. Kristalo",
       age: 35,
};

console.log(user.name); 
console.log(user.age);

console.log(user["name"]);
console.log(user["age"]);

user.age = 29; //user["age"] = 29 でも良い。
console.log(user.age);

console.log(Object.keys(user).length);

console.log(Object.keys(user));

const user2: {
       name: string
       age: number
} = {
       name: "K. Ametisto",
       age: 37,
};

console.log(user2.name); 
console.log(user2.age);

interface UserObj {
       name: string,
       age: number,
       sex?: string,
};

const user3: UserObj = {
       name: "John Smith",
       age: 34,
};

//タプルの例
let member: [string, number] = ["Neko", 26];

console.log(member[0]);
console.log(member[1]);

member = ["Panda", 21];

console.log(member[0]);
console.log(member[1]);

