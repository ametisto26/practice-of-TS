"use strict";
class User {
    name = " "; //初期値がないとエラーになる。
    age = 0; //初期値がないとエラーになる。
    role;
    citizenship = "U.K.";
    isAdult() {
        return this.age >= 20;
    }
    setAge(age) {
        this.age = age;
    }
}
const olivia = new User();
console.log(olivia.name);
console.log(olivia.age);
console.log(olivia.isAdult());
console.log(olivia.role);
console.log(olivia.citizenship);
olivia.name = "Olivia";
olivia.setAge(23); //olivia.age = 31;
olivia.role = "leader";
console.log(olivia.name);
console.log(olivia.age);
console.log(olivia.isAdult());
console.log(olivia.role);
console.log(olivia.citizenship);
//# sourceMappingURL=class.js.map